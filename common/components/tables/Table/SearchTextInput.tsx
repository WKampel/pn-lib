import { TextInput, TextInputProps } from '../../TextInput'

type SearchTextInputProps = TextInputProps & {
  totalRowCount: number
}

export const SearchTextInput = ({ totalRowCount, ...other }: Omit<SearchTextInputProps, 'label'>) => {
  const rowLabel = totalRowCount === 1 ? 'row' : 'rows'
  const label = `Search ${totalRowCount} ${rowLabel}`

  return <TextInput {...other} label={label} />
}
