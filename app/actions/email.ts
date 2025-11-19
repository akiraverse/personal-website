"use server"

import { Resend } from 'resend';

export async function sendCollaborationEmail(formData: {
  name: string;
  email?: string;
  subject?: string;
  message?: string;
}) {
  try {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return { error: 'Email service not configured' };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Simple text email first to test
    const { data, error } = await resend.emails.send({
      from: `delivered@resend.dev`,
      to: 'faqilahz53@gmail.com',
      subject: `${formData.subject} from ${formData.name}, ${formData.email}`,
      html: `${formData.message}`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { error: error.message || 'Failed to send email' };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { error: err instanceof Error ? err.message : 'An unexpected error occurred' };
  }
}