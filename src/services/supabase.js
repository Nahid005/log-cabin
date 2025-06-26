import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kxibvwbknkyzbqjeukux.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aWJ2d2Jrbmt5emJxamV1a3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NzYwODEsImV4cCI6MjA2NDE1MjA4MX0.r3ddixRcMpFFZFT_MKzizldDUSGRajLazFin6Qj92DE'

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;