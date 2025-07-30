export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          address: string
          industry: string
          size: string
          registration_number: string
          tax_id: string
          logo_url: string | null
          website: string | null
          description: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          address: string
          industry: string
          size: string
          registration_number: string
          tax_id: string
          logo_url?: string | null
          website?: string | null
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          address?: string
          industry?: string
          size?: string
          registration_number?: string
          tax_id?: string
          logo_url?: string | null
          website?: string | null
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          company_id: string
          email: string
          first_name: string
          last_name: string
          role: string
          permissions: Json
          avatar_url: string | null
          phone: string | null
          is_active: boolean
          last_login: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          email: string
          first_name: string
          last_name: string
          role: string
          permissions?: Json
          avatar_url?: string | null
          phone?: string | null
          is_active?: boolean
          last_login?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          email?: string
          first_name?: string
          last_name?: string
          role?: string
          permissions?: Json
          avatar_url?: string | null
          phone?: string | null
          is_active?: boolean
          last_login?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          company_id: string
          name: string
          description: string
          category: string
          price: number
          currency: string
          unit: string
          stock_quantity: number
          min_order_quantity: number
          images: Json
          specifications: Json
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          description: string
          category: string
          price: number
          currency?: string
          unit: string
          stock_quantity: number
          min_order_quantity?: number
          images?: Json
          specifications?: Json
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          description?: string
          category?: string
          price?: number
          currency?: string
          unit?: string
          stock_quantity?: number
          min_order_quantity?: number
          images?: Json
          specifications?: Json
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          buyer_company_id: string
          seller_company_id: string
          status: string
          total_amount: number
          currency: string
          payment_status: string
          payment_method: string
          shipping_address: Json
          billing_address: Json
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          buyer_company_id: string
          seller_company_id: string
          status?: string
          total_amount: number
          currency?: string
          payment_status?: string
          payment_method: string
          shipping_address: Json
          billing_address: Json
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          buyer_company_id?: string
          seller_company_id?: string
          status?: string
          total_amount?: number
          currency?: string
          payment_status?: string
          payment_method?: string
          shipping_address?: Json
          billing_address?: Json
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          level: string
          duration_hours: number
          price: number
          currency: string
          instructor_id: string
          thumbnail_url: string | null
          content: Json
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          level: string
          duration_hours: number
          price: number
          currency?: string
          instructor_id: string
          thumbnail_url?: string | null
          content?: Json
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string
          level?: string
          duration_hours?: number
          price?: number
          currency?: string
          instructor_id?: string
          thumbnail_url?: string | null
          content?: Json
          is_published?: boolean
          created_at?: string
          updated_at?: string
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
      user_role: 'admin' | 'manager' | 'employee' | 'viewer'
      order_status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
      payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
      course_level: 'beginner' | 'intermediate' | 'advanced'
    }
  }
}
