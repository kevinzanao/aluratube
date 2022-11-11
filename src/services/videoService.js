import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://orcjkzsqfcwyphjgnozw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yY2prenNxZmN3eXBoamdub3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjAwNTQsImV4cCI6MTk4MzczNjA1NH0.S-A3mnmfvQLPv1ZeL9NXWYjH1Afd6HqzTaB3W_Kqcps";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
  return {
    getAllVideo() {
      return supabase.from("video").select("*");
    }
  }
}