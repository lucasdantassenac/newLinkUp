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
      accounts_configuration: {
        Row: {
          accounts_configuration_post_privacy: string | null
          accounts_configuration_theme: string | null
          accounts_configuration_user_id: string | null
          created_at: string | null
          id: string
          status: string | null
        }
        Insert: {
          accounts_configuration_post_privacy?: string | null
          accounts_configuration_theme?: string | null
          accounts_configuration_user_id?: string | null
          created_at?: string | null
          id?: string
          status?: string | null
        }
        Update: {
          accounts_configuration_post_privacy?: string | null
          accounts_configuration_theme?: string | null
          accounts_configuration_user_id?: string | null
          created_at?: string | null
          id?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_configuration_accounts_configuration_user_id_fkey"
            columns: ["accounts_configuration_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      courses: {
        Row: {
          courses_author: string
          courses_description: string | null
          courses_end_at: string | null
          courses_experience: number
          courses_members: number | null
          courses_start_at: string | null
          courses_status: string
          couses_name: string
          created_at: string
          id: string
        }
        Insert: {
          courses_author: string
          courses_description?: string | null
          courses_end_at?: string | null
          courses_experience?: number
          courses_members?: number | null
          courses_start_at?: string | null
          courses_status?: string
          couses_name: string
          created_at?: string
          id?: string
        }
        Update: {
          courses_author?: string
          courses_description?: string | null
          courses_end_at?: string | null
          courses_experience?: number
          courses_members?: number | null
          courses_start_at?: string | null
          courses_status?: string
          couses_name?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_courses_author_fkey"
            columns: ["courses_author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["uid"]
          }
        ]
      }
      events: {
        Row: {
          created_at: string | null
          events_author: string | null
          events_description: string | null
          events_end_at: string | null
          events_experience: number | null
          events_members: number | null
          events_start_at: string | null
          events_title: string | null
          id: string
          status: string | null
        }
        Insert: {
          created_at?: string | null
          events_author?: string | null
          events_description?: string | null
          events_end_at?: string | null
          events_experience?: number | null
          events_members?: number | null
          events_start_at?: string | null
          events_title?: string | null
          id?: string
          status?: string | null
        }
        Update: {
          created_at?: string | null
          events_author?: string | null
          events_description?: string | null
          events_end_at?: string | null
          events_experience?: number | null
          events_members?: number | null
          events_start_at?: string | null
          events_title?: string | null
          id?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_events_author_fkey"
            columns: ["events_author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      interests: {
        Row: {
          created_at: string | null
          id: string
          interests_chosen: boolean | null
          interests_name: string | null
          interests_owner_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          interests_chosen?: boolean | null
          interests_name?: string | null
          interests_owner_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          interests_chosen?: boolean | null
          interests_name?: string | null
          interests_owner_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interests_interests_owner_id_fkey"
            columns: ["interests_owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      messages: {
        Row: {
          created_at: string | null
          id: string
          messages_author: string | null
          messages_content: string | null
          messages_destination: string | null
          messages_media_url: string | null
          messages_type: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          messages_author?: string | null
          messages_content?: string | null
          messages_destination?: string | null
          messages_media_url?: string | null
          messages_type?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          messages_author?: string | null
          messages_content?: string | null
          messages_destination?: string | null
          messages_media_url?: string | null
          messages_type?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_messages_author_fkey"
            columns: ["messages_author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_messages_destination_fkey"
            columns: ["messages_destination"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          notifications_content: string | null
          notifications_end_at: string | null
          notifications_from: string | null
          notifications_to: string | null
          notifications_to_phone_numbers: string[] | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          notifications_content?: string | null
          notifications_end_at?: string | null
          notifications_from?: string | null
          notifications_to?: string | null
          notifications_to_phone_numbers?: string[] | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          notifications_content?: string | null
          notifications_end_at?: string | null
          notifications_from?: string | null
          notifications_to?: string | null
          notifications_to_phone_numbers?: string[] | null
          status?: string | null
        }
        Relationships: []
      }
      post_interests: {
        Row: {
          created_at: string | null
          id: string
          post_interests_interest_id: string | null
          post_interests_post_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_interests_interest_id?: string | null
          post_interests_post_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          post_interests_interest_id?: string | null
          post_interests_post_id?: string | null
          status?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          created_at: string | null
          id: string
          post_end_at: string | null
          posts_author: string | null
          posts_description: string | null
          posts_interests_list: string[] | null
          posts_like: number | null
          posts_name: string | null
          posts_privacy: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_end_at?: string | null
          posts_author?: string | null
          posts_description?: string | null
          posts_interests_list?: string[] | null
          posts_like?: number | null
          posts_name?: string | null
          posts_privacy?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          post_end_at?: string | null
          posts_author?: string | null
          posts_description?: string | null
          posts_interests_list?: string[] | null
          posts_like?: number | null
          posts_name?: string | null
          posts_privacy?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_posts_author_fkey"
            columns: ["posts_author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          uid: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          uid?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          uid?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_uid_fkey"
            columns: ["uid"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          id: string
          projects_author: string | null
          projects_description: string | null
          projects_end_at: string | null
          projects_experience: number | null
          projects_members: number | null
          projects_name: string | null
          projects_start_at: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          projects_author?: string | null
          projects_description?: string | null
          projects_end_at?: string | null
          projects_experience?: number | null
          projects_members?: number | null
          projects_name?: string | null
          projects_start_at?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          projects_author?: string | null
          projects_description?: string | null
          projects_end_at?: string | null
          projects_experience?: number | null
          projects_members?: number | null
          projects_name?: string | null
          projects_start_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_projects_author_fkey"
            columns: ["projects_author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_birthday: string | null
          users_cpf: string | null
          users_email: string | null
          users_experience: number | null
          users_level: number | null
          users_name: string | null
          users_next_level_experience: number | null
          users_password: string | null
          users_profile_photo: string | null
          users_registry: string | null
          users_role: string | null
          users_username: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_birthday?: string | null
          users_cpf?: string | null
          users_email?: string | null
          users_experience?: number | null
          users_level?: number | null
          users_name?: string | null
          users_next_level_experience?: number | null
          users_password?: string | null
          users_profile_photo?: string | null
          users_registry?: string | null
          users_role?: string | null
          users_username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_birthday?: string | null
          users_cpf?: string | null
          users_email?: string | null
          users_experience?: number | null
          users_level?: number | null
          users_name?: string | null
          users_next_level_experience?: number | null
          users_password?: string | null
          users_profile_photo?: string | null
          users_registry?: string | null
          users_role?: string | null
          users_username?: string | null
        }
        Relationships: []
      }
      users_courses_list: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_courses_list_course_id: string | null
          users_courses_list_user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_courses_list_course_id?: string | null
          users_courses_list_user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_courses_list_course_id?: string | null
          users_courses_list_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_courses_list_users_courses_list_user_id_fkey"
            columns: ["users_courses_list_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_events_lists: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_events_lists_event_id: string | null
          users_events_lists_user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_events_lists_event_id?: string | null
          users_events_lists_user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_events_lists_event_id?: string | null
          users_events_lists_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_events_lists_users_events_lists_user_id_fkey"
            columns: ["users_events_lists_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_friends_request_list: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_friends_request_list_user_id: string | null
          users_friends_request_list_user_requester_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_friends_request_list_user_id?: string | null
          users_friends_request_list_user_requester_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_friends_request_list_user_id?: string | null
          users_friends_request_list_user_requester_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_friends_request_list_users_friends_request_list_use_fkey1"
            columns: ["users_friends_request_list_user_requester_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_friends_request_list_users_friends_request_list_user_fkey"
            columns: ["users_friends_request_list_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_posts_liked: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_posts_liked_post_id: string | null
          users_posts_liked_user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_posts_liked_post_id?: string | null
          users_posts_liked_user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_posts_liked_post_id?: string | null
          users_posts_liked_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_posts_liked_users_posts_liked_user_id_fkey"
            columns: ["users_posts_liked_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_posts_list: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_posts_list_post_id: string | null
          users_posts_list_user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_posts_list_post_id?: string | null
          users_posts_list_user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_posts_list_post_id?: string | null
          users_posts_list_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_posts_list_users_posts_list_user_id_fkey"
            columns: ["users_posts_list_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users_projects_list: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          users_projects_list_project_id: string | null
          users_projects_list_user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_projects_list_project_id?: string | null
          users_projects_list_user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          users_projects_list_project_id?: string | null
          users_projects_list_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_projects_list_users_projects_list_user_id_fkey"
            columns: ["users_projects_list_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
