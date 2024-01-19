import { FormFieldType } from '../../../../gql/graphql'
import { FormFieldDate } from './fieldTypes/FormFieldDate'
import { FormFieldLongText } from './fieldTypes/FormFieldLongText'
import { FormFieldRadio } from './fieldTypes/FormFieldRadio'
import { FormFieldSelect } from './fieldTypes/FormFieldSelect'
import { FormFieldTextArea } from './fieldTypes/FormFieldTextArea'
import { FormFieldTextInput } from './fieldTypes/FormFieldTextInput'
import { FormFieldTime } from './fieldTypes/FormFieldTime'
import { FormFieldTitle } from './fieldTypes/FormFieldTitle'
import { FormFieldYesNo } from './fieldTypes/FormFieldYesNo'

type FormFieldProps = {
  type: FormFieldType
  required: boolean
  name: string
  value: any
  onChange: (value: any) => void
  options?: string[]
}

export const FormField = ({ type, required, name, value, onChange, options = [] }: FormFieldProps) => {
  if (required) name += '*'

  if (type === 'TITLE') return <FormFieldTitle label={name} />
  if (type === 'TEXT_INPUT') return <FormFieldTextInput label={name} value={value} onChange={onChange} />
  if (type === 'TEXT_AREA') return <FormFieldTextArea label={name} value={value} onChange={onChange} />
  if (type === 'YES_NO') return <FormFieldYesNo label={name} value={value} onChange={onChange} />
  if (type === 'RADIO') return <FormFieldRadio label={name} value={value} onChange={onChange} options={options} />
  if (type === 'DROPDOWN') return <FormFieldSelect label={name} value={value} onChange={onChange} options={options} />
  if (type === 'DATE') return <FormFieldDate label={name} value={value} onChange={onChange} />
  if (type === 'TIME') return <FormFieldTime label={name} value={value} onChange={onChange} />
  if (type === 'LONG_TEXT') return <FormFieldLongText label={name} />
  else {
    console.error(`FormField of type "${type}" is not recognized.`)
    return null
  }
}
