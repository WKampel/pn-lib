import { Platform } from 'react-native'
import Native from './native'
import Web from './web'

export type BackButtonProps = { onPress: () => void }

export const BackButton = (props: BackButtonProps) => {
  if (Platform.OS === 'web') return <Web {...props} />
  else return <Native {...props} />
}
