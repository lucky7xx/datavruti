import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, skills, type } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the submission in a database
    // 3. Send to a CRM or form service like Formspree

    // For now, we'll just log it (replace with actual email/database logic)
    console.log('Contact form submission:', {
      type,
      name,
      email,
      phone,
      company,
      message,
      skills,
      timestamp: new Date().toISOString(),
    });

    // Example: Send to Formspree (uncomment and add your Formspree endpoint)
    /*
    const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        message,
        skills,
        type,
      }),
    });

    if (!formspreeResponse.ok) {
      throw new Error('Failed to submit form');
    }
    */

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
