import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot check: if websiteHp is filled, silently discard bot
    if (body.websiteHp && body.websiteHp.trim().length > 0) {
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

    // 3. Persist into Supabase Database
    const { data: dbData, error: dbError } = await supabase
      .from("enquiries")
      .insert([
        {
          full_name: fullName,
          company_name: companyName,
          work_email: workEmail,
          phone_whatsapp: phoneOrWhatsApp,
          country_location: countryLocation,
          product_category: productCategory,
          has_recipe: hasRecipe,
          estimated_quantity: body.estimatedQuantity || "Not specified",
          packaging_requirement: body.packagingRequirement || "Standard bulk / To be discussed",
          project_description: projectDescription,
          status: "New",
        },
      ])
      .select();

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // Even if database has an issue, log to server so lead isn't lost
    } else {
      console.log("Enquiry successfully recorded in Supabase:", dbData);
    }

    // 4. Optional external notification webhook (Slack/Email/Zapier)
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
