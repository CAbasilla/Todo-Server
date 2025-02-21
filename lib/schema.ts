export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      todo: {
        Row: {
          id: number
          created_at: string
          text: string | null
          status: number | null
        }
        Insert: {
          id?: number
          created_at?: string
          text?: string | null
          status?: number | null
        }
        Update: {
          id?: number
          created_at?: string
          text?: string | null
          status?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}