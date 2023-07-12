import { sendEmail } from "@/utilities/email/sendEmail";
import sendTelegramMessage from "@/utilities/telegram/sendMessage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { contactNumber, email, message, name } = await req.json();

  // Send to email
  // await sendEmail({ contactNumber, email, message, name });

  // Telegram message
  await sendTelegramMessage(
    `*Name*: ${name}\n*Contact Number*: ${contactNumber}\n*Email*: ${email}\n\n*Message*: ${message}`
  );

  return NextResponse.json({ contactNumber, email, message, name });
}
