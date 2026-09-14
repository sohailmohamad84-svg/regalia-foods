import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot check: if websiteHp is filled, it's a bot
    if (body.websiteHp && body.websiteHp.trim().length > 0) {
      // Silently return success to avoid bot retries
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    // 2. Validate required fields
    const {
      fullName,
      companyName,
      workEmail,
      phoneOrWhatsApp,
      countryLocation,
      productCategory,
      hasRecipe,
      projectDescription,
    } = body;

    if (
      !fullName ||
      !companyName ||
      !workEmail ||
      !phoneOrWhatsApp ||
      !countryLocation ||
      !projectDescription
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    // Structured enquiry log
    const enquiryRecord = {
      timestamp: new Date().toISOString(),
      fullName,
      companyName,
      workEmail,
      phoneOrWhatsApp,
      countryLocation,
      productCategory,
      hasRecipe,
      estimatedQuantity: body.estimatedQuantity || "Not specified",
      packagingRequirement: body.packagingRequirement || "Standard bulk / open to recommendation",
      projectDescription,
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    console.log("=== NEW B2B MANUFACTURING ENQUIRY RECEIVED ===");
    console.log(JSON.stringify(enquiryRecord, null, 2));

    // If an external webhook (Slack, CRM, SendGrid, Resend) or SMTP is configured:
    const notificationWebhook = process.env.ENQUIRY_WEBHOOK_URL;
    if (notificationWebhook) {
      try {
        await fetch(notificationWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `*New Regalia Foods B2B Manufacturing Enquiry*\n*Company:* ${companyName}\n*Contact:* ${fullName} (${workEmail}, ${phoneOrWhatsApp})\n*Category:* ${productCategory}\n*Recipe Status:* ${hasRecipe}\n*Quantity:* ${body.estimatedQuantity}\n*Message:* ${projectDescription}`,
          }),
        });
      } catch (webhookError) {
        console.error("Failed to post to webhook:", webhookError);
        // Do not fail user request if notification webhook fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Regalia Foods LLP. Our manufacturing team has received your enquiry and will respond within 1 business day.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
