import { Platform } from 'react-native'
import Native from './native'
import Web from './web'

export type HeaderProps = {
  options?: {
    title?: string
  }
  route: {
    name: string
  }
  handleBackTo?: () => void
}

export const Header = (props: HeaderProps) => {
  if (Platform.OS === 'web') return <Web {...props} />
  else return <Native {...props} />
}
