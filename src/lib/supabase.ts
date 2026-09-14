import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://ayythufllklkqjpeuicl.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eXRodWZsbGtsa3FqcGV1aWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzODU3MzIsImV4cCI6MjEwNDk2MTczMn0.hJ-O5V71FMcai2r1upwjUZevCWkXFeou71mCLrdmwRw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
