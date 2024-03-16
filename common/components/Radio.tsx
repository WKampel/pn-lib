import { useCallback } from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { CheckBox } from './CheckBox'

type RadioProps<TOption> = {
  label?: string
  value: string[]
  options?: TOption[]
  onChange: (value: string[]) => void
  getValue: (option: TOption) => string
  getLabel: (option: TOption, index: number) => string
}

export const Radio = <TOption extends any>({ label, value: valueProp, onChange, options = [], getValue, getLabel }: RadioProps<TOption>) => {
  const { tokens } = useTheme()

  const handleChange = useCallback(
    (optionValue: string) => () => {
      const selected = valueProp.includes(optionValue)
      if (selected) {
        onChange(valueProp.filter(v => v !== optionValue))
      } else {
        onChange([...valueProp, optionValue])
      }
    },
    [onChange, valueProp]
  )

  return (
    <View
      style={{
        gap: tokens.spacing_s,
      }}
    >
      {label ? <Text>{label}</Text> : null}
      {options.map((option, i) => {
        const label = getLabel(option, i)
        const value = getValue(option)
        const selected = valueProp.includes(value)

        return <CheckBox key={i + value} round value={selected} onChange={handleChange(value)} label={label} />
      })}
    </View>
  )
}
