/**
 * Environment configuration for the application
 * Load sensitive values from environment variables
 */

interface EnvironmentConfig {
  api: {
    contactFormWebhookUrl: string;
  };
  app: {
    env: 'development' | 'production' | 'staging';
    debug: boolean;
  };
}

class Environment {
  private static instance: Environment;
  private config: EnvironmentConfig;

  private constructor() {
    this.config = this.loadConfig();
    this.validateConfig();
  }

  /**
   * Get singleton instance
   */
  static getInstance(): Environment {
    if (!Environment.instance) {
      Environment.instance = new Environment();
    }
    return Environment.instance;
  }

  /**
   * Load configuration from environment variables
   */
  private loadConfig(): EnvironmentConfig {
    // In production, use relative path to Vercel serverless function
    // In development, use the env variable
    const webhookUrl = import.meta.env.PROD
      ? '/api/contact'
      : import.meta.env.VITE_GAS_WEBHOOK_URL || '';

    return {
      api: {
        contactFormWebhookUrl: webhookUrl,
      },
      app: {
        env: (import.meta.env.VITE_APP_ENV as 'development' | 'production' | 'staging') || 'development',
        debug: import.meta.env.VITE_DEBUG === 'true',
      },
    };
  }

  /**
   * Validate that all required environment variables are set
   */
  private validateConfig(): void {
    if (!this.config.api.contactFormWebhookUrl) {
      console.warn(
        'Warning: VITE_GAS_WEBHOOK_URL or VITE_CONTACT_WEBHOOK_URL is not set. Contact form will not work.'
      );
    }
  }

  /**
   * Get complete configuration
   */
  getConfig(): EnvironmentConfig {
    return this.config;
  }

  /**
   * Get specific configuration value
   */
  get<T extends keyof EnvironmentConfig>(key: T): EnvironmentConfig[T] {
    return this.config[key];
  }

  /**
   * Get webhook URL
   */
  getWebhookUrl(): string {
    return this.config.api.contactFormWebhookUrl;
  }

  /**
   * Check if running in production
   */
  isProduction(): boolean {
    return this.config.app.env === 'production';
  }

  /**
   * Check if debug mode is enabled
   */
  isDebugEnabled(): boolean {
    return this.config.app.debug;
  }
}

export const config = Environment.getInstance();
export default config;
