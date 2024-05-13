import { TextInput, TextInputProps } from './TextInput'

export type NumberInputProps = Omit<TextInputProps, 'keyboardType' | 'value' | 'onChange'> & {
  value: number | null
  onChange: (value: number | null) => void
}

export const NumberInput = (props: NumberInputProps) => {
  const onChange = (value: string) => {
    // Remove all non-numeric characters
    const number = parseFloat(value.replace(/[^0-9]/g, ''))
    props.onChange(isNaN(number) ? null : number)
  }

  return <TextInput keyboardType='numeric' {...props} onChange={onChange} value={props.value?.toString() || ''} />
}
