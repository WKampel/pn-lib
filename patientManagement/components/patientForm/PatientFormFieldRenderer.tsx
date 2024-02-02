import { FormFieldType } from '../../../../gql/graphql'
import { assertUnreachable } from '../../../core/utils/assertUnreachable'
import { PatientFormFieldDate } from './fields/PatientFormFieldDate'
import { PatientFormFieldLongText } from './fields/PatientFormFieldLongText'
import { PatientFormFieldRadio } from './fields/PatientFormFieldRadio'
import { PatientFormFieldSelect } from './fields/PatientFormFieldSelect'
import { PatientFormFieldSignature } from './fields/PatientFormFieldSignature'
import { PatientFormFieldTextArea } from './fields/PatientFormFieldTextArea'
import { PatientFormFieldTextInput } from './fields/PatientFormFieldTextInput'
import { PatientFormFieldTime } from './fields/PatientFormFieldTime'
import { PatientFormFieldTitle } from './fields/PatientFormFieldTitle'
import { PatientFormFieldYesNo } from './fields/PatientFormFieldYesNo'

type BasePatientFormFieldProps<TValue, TFormFieldType extends FormFieldType> = {
  id: string
  name: string
  type: TFormFieldType
  required: boolean
  options: FormFieldOption[]
  value: TValue
  onChange: (value: TValue) => void
}

type FormFieldOption = {
  id: string
  value: string
}

export type PatientFormFieldProps =
  | BasePatientFormFieldProps<never, 'TITLE'>
  | BasePatientFormFieldProps<string, 'TEXT_INPUT'>
  | BasePatientFormFieldProps<Date, 'DATE'>
  | BasePatientFormFieldProps<Date, 'TIME'>
  | BasePatientFormFieldProps<boolean, 'YES_NO'>
  | BasePatientFormFieldProps<string[], 'RADIO'>
  | BasePatientFormFieldProps<string, 'DROPDOWN'>
  | BasePatientFormFieldProps<never, 'LONG_TEXT'>
  | BasePatientFormFieldProps<string, 'SIGNATURE'>
  | BasePatientFormFieldProps<string, 'TEXT_AREA'>

export type ExtractPatientFormFieldProps<TFormFieldType extends FormFieldType> = Extract<PatientFormFieldProps, { type: TFormFieldType }>

export const PatientFormFieldRenderer = ({ field }: { field: PatientFormFieldProps }) => {
  const name = field.name + (field.required ? '*' : '')
  const type = field.type
  switch (type) {
    case 'TITLE':
      return <PatientFormFieldTitle {...field} name={name} />
    case 'TEXT_INPUT':
      return <PatientFormFieldTextInput {...field} name={name} />
    case 'DATE':
      return <PatientFormFieldDate {...field} name={name} />
    case 'TIME':
      return <PatientFormFieldTime {...field} name={name} />
    case 'YES_NO':
      return <PatientFormFieldYesNo {...field} name={name} />
    case 'RADIO':
      return <PatientFormFieldRadio {...field} name={name} />
    case 'DROPDOWN':
      return <PatientFormFieldSelect {...field} name={name} />
    case 'LONG_TEXT':
      return <PatientFormFieldLongText {...field} name={name} />
    case 'SIGNATURE':
      return <PatientFormFieldSignature {...field} name={name} />
    case 'TEXT_AREA':
      return <PatientFormFieldTextArea {...field} name={name} />
    default:
      assertUnreachable(type)
  }
}
