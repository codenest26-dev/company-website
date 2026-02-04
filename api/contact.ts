// api/contact.ts
// Vercel Serverless Function - automatically hosted when you deploy!

import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize input
 */
function sanitizeInput(input: string): string {
  return String(input)
    .trim()
    .substring(0, 5000)
    .replace(/[<>]/g, '');
}

/**
 * Main handler function
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Handle CORS for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      status: 'error',
      message: 'Method not allowed',
    });
  }

  try {
    const { name, email, phone, company, message } = req.body as ContactData;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing required fields (name, email, and message are required)',
      });
    }

    // Validate email
    if (!isValidEmail(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format',
      });
    }

    // Validate message length
    if (message.trim().length < 10) {
      return res.status(400).json({
        status: 'error',
        message: 'Message must be at least 10 characters',
      });
    }

    // Sanitize data
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      company: company ? sanitizeInput(company) : '',
      message: sanitizeInput(message),
      timestamp: new Date().toISOString(),
    };

    // Get Google Apps Script URL from environment
    const gasUrl = process.env.GAS_WEBHOOK_URL;

    if (!gasUrl) {
      console.error('GAS_WEBHOOK_URL not configured in Vercel environment variables');
      return res.status(500).json({
        status: 'error',
        message: 'Server configuration error: Webhook URL not set.',
      });
    }

    // Forward request to Google Apps Script
    const gasResponse = await fetch(gasUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    // Check if response is ok
    if (!gasResponse.ok) {
      console.error(`GAS returned status: ${gasResponse.status}`);
      return res.status(500).json({
        status: 'error',
        message: 'Failed to process submission by backend service.',
      });
    }

    // Return success
    return res.status(200).json({
      status: 'success',
      message: 'Form submitted successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    
    return res.status(500).json({
      status: 'error',
      message: 'Failed to submit form. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
    });
  }
}
