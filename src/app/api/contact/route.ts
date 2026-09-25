import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, projectType, message, _honey } = data;

    // Honeypot spam protection
    if (_honey) {
      return NextResponse.json({ success: true, message: "Bot blocked silently" }, { status: 200 });
    }

    // Ensure required fields are present
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      console.error("Missing WEB3FORMS_ACCESS_KEY in environment variables.");
      return NextResponse.json({ success: false, message: "Server misconfiguration." }, { status: 500 });
    }

    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `New Lead: ${projectType} project from ${name}`,
      from_name: "Aesthetic Design Website",
      name: name,
      email: email,
      phone: phone || 'Not provided',
      projectType: projectType,
      message: message
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("Web3Forms API Error:", result);
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send email." },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error("Error submitting to Web3Forms:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
