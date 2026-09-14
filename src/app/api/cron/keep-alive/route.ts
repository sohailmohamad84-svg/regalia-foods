import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // Lightweight keep-alive query to maintain Supabase activity
    const { data, error } = await supabase
      .from("enquiries")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Keep-alive ping error:", error);
      return NextResponse.json({ status: "error", error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      status: "alive",
      message: "Supabase database heartbeat successful. Inactivity pause prevented.",
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ status: "error", error: err.message }, { status: 500 });
  }
}
