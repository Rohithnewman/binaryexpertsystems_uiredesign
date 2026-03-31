import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Server-side rudimentary validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    // If no API key is set, we return a simulated success for demonstration/testing purposes
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not defined in environment variables. Simulating successful form submission.");
      return NextResponse.json({ success: true, simulated: true });
    }

    // Call Resend API natively using standard fetch (avoids extra npm dependencies)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>', // Update this to your verified domain once ready
        to: ['info@binaryexpertsystems.co.in'],       // Target email from requirements
        subject: `New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeef1;">
            <h2 style="color: #168857; margin-bottom: 20px;">Internal System Notification</h2>
            <p><strong>Initiator:</strong> ${name}</p>
            <p><strong>Contact Matrix:</strong> ${email} | ${phone}</p>
            <hr style="border-top: 1px solid #eaeef1; margin: 20px 0;" />
            <h3 style="color: #4a5558;">Payload Content:</h3>
            <p style="white-space: pre-wrap; color: #1a1f21;">${message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API rejected payload:", errorData);
      return NextResponse.json({ error: 'Failed to transmit message through external provider' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Transmission Error:', error);
    return NextResponse.json({ error: 'Internal server error during payload processing' }, { status: 500 });
  }
}
