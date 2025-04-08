import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      console.error("❌ Validation Error: Missing fields");
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_1hz0hhc", // Replace with your EmailJS Service ID
          template_id: "template_3ez1q3c", // Replace with your EmailJS Template ID
          user_id: "Fwoy-n8VIIbYzbzKE", // Replace with your EmailJS Public Key
          template_params: {
            name: name,
            email: email,
            message: message,
          },
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error("❌ EmailJS API Error:", responseData);
      throw new Error(responseData.error || "Failed to send email");
    }

    console.log("✅ Email Sent Successfully!", responseData);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Server Error:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
