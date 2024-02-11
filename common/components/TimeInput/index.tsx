import { Platform } from 'react-native'
import { TextInputSize } from '../../types/TextInputSize'
import Native from './native'
import Web from './web'

export type TimeInputProps = {
  value: string | null
  onChange: (value: string) => void
  label?: string
  disabled?: boolean
  onFocus?: () => void
  onBlur?: () => void
  size?: TextInputSize
  flex?: number | boolean
}

export const TimeInput = (props: TimeInputProps) => {
  if (Platform.OS === 'web') return <Web {...props} />
  else return <Native {...props} />
}
