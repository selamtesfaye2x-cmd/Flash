const SUPABASE_URL = "https://zngnhssgpqxvimfocpil.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_zbiPWLKaYRxQU-R3IgAO-A_RfkGfBZH";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
