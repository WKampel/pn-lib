import { TextInput, TextInputContainerStyles } from '../../TextInput'

export const SearchTextInput = ({
  style,
  totalRowCount,
  value,
  onChange,
}: {
  style?: TextInputContainerStyles
  totalRowCount: number
  value: string
  onChange: (value: string) => void
}) => {
  const rowLabel = totalRowCount === 1 ? 'row' : 'rows'
  const label = `Search ${totalRowCount} ${rowLabel}`

  return <TextInput containerStyle={style} label={label} value={value} onChange={onChange} />
}
