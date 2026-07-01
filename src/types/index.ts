import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  customContent?: ReactNode
  bgImage?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}