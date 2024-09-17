export interface Sponsor {
  data: SponsorData[]
  current_page: number
  per_page: number
  total: number
}

export interface SponsorData {
  id: number
  sponsor_code: string
  sponsor_name: string
  sponsor_type: string
  sponsor_ID: string
  address: string
  postal_code: string
  phone: string
  email: string
  max_limit: string
  financial_limit: string
  time_limit: number
  active: number
  created_by: number
  updated_by: any
  created_at: string
  updated_at: string
  created_by_name: string
  updated_by_name: any
  contact_officers: ContactOfficer[]
}

export interface ContactOfficer {
  id: number
  sponsor_id: number
  contact_officer_name: string
  phone: string
  email: string
  created_at: string
  updated_at: string
}
