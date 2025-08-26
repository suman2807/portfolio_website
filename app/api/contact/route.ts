import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send form data to Web3Forms with improved configuration to reduce spam
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'b9f6e694-94f4-4eb7-b8db-3d8eafe06285',
        name: name,
        email: email,
        subject: `Portfolio Contact: ${subject}`,
        message: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        from_name: 'Suman Saurabh Portfolio',
        reply_to: email,
        // Additional parameters to improve deliverability
        botcheck: false, // Disable bot check since we're handling validation
        honeypot: '', // Empty honeypot field
        // Customize email format
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 12px;">
              Sent from Suman Saurabh's Portfolio Website - ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      }),
    });

    const web3formsResult = await web3formsResponse.json();

    if (web3formsResponse.ok && web3formsResult.success) {
      console.log('Contact form submitted successfully:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { message: 'Thank you for your message! I will get back to you soon.' },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms error:', web3formsResult);
      return NextResponse.json(
        { error: 'Failed to send message through the form service. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your message. Please try again.' },
      { status: 500 }
    );
  }
}
