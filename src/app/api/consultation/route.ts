import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // In a real app, you would send an email here using Resend, Postmark, etc.
    // For this simulation, we'll just log and return success.
    console.log("Consultation Request Received:", body);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json(
      { message: "Consultation request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
