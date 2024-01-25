import { ReactNode } from 'react'
import { NotificationType } from './NotificationType'

// Params for notify function
// This is here instead of in the provider file to prevent a circular dependency between the provider and the context

export type NotifyParams = {
  id?: string
  title: string
  body: ReactNode | string
  type: NotificationType
  linkTo?: string
  lifeSpan?: number
  onPress?: () => void
}
