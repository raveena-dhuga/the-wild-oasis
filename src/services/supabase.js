import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://euvrczpareaumixsbolq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dnJjenBhcmVhdW1peHNib2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMjM3ODIsImV4cCI6MjAxMjY5OTc4Mn0.1QzXwn1TgRPLF6jx1Nw_iXfm4Dwwe1xrGUgRyVncKnw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
