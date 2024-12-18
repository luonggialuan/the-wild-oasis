import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hybzcjfnvqmkzbgpoyzw.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5YnpjamZudnFta3piZ3BveXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxOTY2MzMsImV4cCI6MjA0ODc3MjYzM30.NHsmgEn_45BFR63rBHt2QrN4DGmPq2GMQuqbdg47iWc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
