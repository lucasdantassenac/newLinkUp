import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ccbfpcedkwfsmatlwdni.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjYmZwY2Vka3dmc21hdGx3ZG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDU5NjAsImV4cCI6MjAxNDU4MTk2MH0.O27bAi8sCPtubU7mHe-zd3mtt0a6uU5_xnOBEEVu0uw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})