
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Resend } from 'resend';

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""; // optional but recommended
export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
