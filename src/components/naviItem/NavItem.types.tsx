import { ReactNode } from 'react'

export type NavItemProps = {
  icon: (props: { [key: string]: any }) => ReactNode
  name: string
  isActive: boolean
}