import { Platform, StyleProp, ViewStyle } from 'react-native'
import { FileState } from '../../types/FileState'
import Native from './native'
import Web from './web'

export type ImageInputProps = {
  style?: StyleProp<ViewStyle>
  label?: string
  onChange?: (file: any) => void
  value?: FileState | null
  camera?: boolean
  transformUri?: (uri: string) => Promise<string>
  aspect?: number
}

export const ImageInput = (props: ImageInputProps) => {
  if (Platform.OS === 'web') return <Web {...props} />
  else return <Native {...props} />
}
