import { Platform } from 'react-native'
import { TextInputSize } from '../../types/TextInputSize'
import Native from './native'
import Web from './web'

export type DayInputProps = {
  disabled?: boolean
  value: string | null
  onChange: (date: string) => void
  label?: string
  onFocus?: () => void
  onBlur?: () => void
  size?: TextInputSize
  flex?: number | boolean
}

export const DayInput = (props: DayInputProps) => {
  if (Platform.OS === 'web') return <Web {...props} />
  else return <Native {...props} />
}
