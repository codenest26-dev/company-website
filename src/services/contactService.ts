// services/contactService.ts
import { config } from "@/config/environment";


interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

interface SubmissionResponse {
  status: 'success' | 'error';
  message: string;
  timestamp?: string;
}

class ContactService {
  private webhookUrl: string;
  private timeout: number = 10000; // 10 seconds

  constructor(webhookUrl: string) {
    if (!webhookUrl) {
      console.warn('Webhook URL not provided to ContactService');
    }
    this.webhookUrl = webhookUrl;
  }

  /**
   * Validate form data before submission
   */
  private validateFormData(data: ContactFormData): { valid: boolean; error?: string } {
    if (!data.name || data.name.trim().length === 0) {
      return { valid: false, error: 'Name is required' };
    }

    if (!data.email || data.email.trim().length === 0) {
      return { valid: false, error: 'Email is required' };
    }

    if (!this.isValidEmail(data.email)) {
      return { valid: false, error: 'Please enter a valid email address' };
    }

    if (!data.message || data.message.trim().length === 0) {
      return { valid: false, error: 'Message is required' };
    }

    if (data.message.trim().length < 10) {
      return { valid: false, error: 'Message must be at least 10 characters long' };
    }

    return { valid: true };
  }

  /**
   * Email validation regex
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Sanitize form data to prevent XSS
   */
  private sanitizeData(data: ContactFormData): ContactFormData {
    return {
      name: this.sanitizeString(data.name),
      email: this.sanitizeString(data.email),
      phone: data.phone ? this.sanitizeString(data.phone) : undefined,
      company: data.company ? this.sanitizeString(data.company) : undefined,
      message: this.sanitizeString(data.message),
    };
  }

  /**
   * Remove potentially dangerous characters
   */
  private sanitizeString(str: string): string {
    return str
      .trim()
      .replace(/[<>]/g, '')
      .substring(0, 500); // Limit length
  }

  /**
   * Submit contact form to Google Apps Script
   */
  async submitContactForm(formData: ContactFormData): Promise<SubmissionResponse> {
    try {
      // Validate data
      const validation = this.validateFormData(formData);
      if (!validation.valid) {
        return {
          status: 'error',
          message: validation.error || 'Validation failed',
        };
      }

      // Sanitize data
      const sanitizedData = this.sanitizeData(formData);

      // Submit to Google Apps Script
      if (!this.webhookUrl) {
        // Simulate success if no URL is provided (for development/testing)
        console.warn('ContactService: No webhook URL provided, simulating successful submission');
        await new Promise(resolve => setTimeout(resolve, 1500));
        return {
          status: 'success',
          message: 'Message sent successfully (Simulation Mode)',
          timestamp: new Date().toISOString()
        };
      }

      const response = await this.submitToWebhook(sanitizedData);
      return response;
    } catch (error) {
      console.error('ContactService Error:', error);
      return {
        status: 'error',
        message: 'Failed to submit form. Please try again later.',
      };
    }
  }

  /**
   * Submit data to Google Apps Script webhook with timeout
   * Works on production (Vercel) without CORS issues!
   */
  private async submitToWebhook(data: ContactFormData): Promise<SubmissionResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: SubmissionResponse = await response.json();
      return result;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            status: 'error',
            message: 'Request timeout. Please check your internet connection and try again.',
          };
        }
        return {
          status: 'error',
          message: error.message,
        };
      }

      return {
        status: 'error',
        message: 'Network error. Please try again.',
      };
    }
  }
}


// Create and export a singleton instance
const WEBHOOK_URL = config.getWebhookUrl();
export const contactService = new ContactService(WEBHOOK_URL);

export default contactService;
