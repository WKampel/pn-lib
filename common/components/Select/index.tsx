import { Platform } from 'react-native'
import { IconProps } from '../../types/IconProps'
import Native from './native'
import Web from './web'

export type SelectProps<TOption, TValue> = {
  value: TValue | undefined
  onChange: (value: TValue) => void
  options: TOption[]
  label: string
  getLabel: (option: TOption) => string
  getValue: (option: TOption) => TValue
  getLabelIcon?: (option: TOption) => React.ReactElement<IconProps>
  flex?: boolean | number
}

export const Select = <TOption extends any, TValue extends string>(props: SelectProps<TOption, TValue>) => {
  if (Platform.OS === 'web') return <Web {...props} />
  else return <Native {...props} />
}
