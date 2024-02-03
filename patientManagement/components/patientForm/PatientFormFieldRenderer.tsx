import { FormFieldType } from '../../../../gql/graphql'
import { FormFieldValueTypeMap } from '../../../../pn-core-lib/types/FormField'
import { assertUnreachable } from '../../../core/utils/assertUnreachable'
import { PatientFormFieldDate } from './fields/PatientFormFieldDate'
import { PatientFormFieldRadio } from './fields/PatientFormFieldRadio'
import { PatientFormFieldSelect } from './fields/PatientFormFieldSelect'
import { PatientFormFieldSignature } from './fields/PatientFormFieldSignature'
import { PatientFormFieldTextArea } from './fields/PatientFormFieldTextArea'
import { PatientFormFieldTextInput } from './fields/PatientFormFieldTextInput'
import { PatientFormFieldTime } from './fields/PatientFormFieldTime'
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
  | BasePatientFormFieldProps<FormFieldValueTypeMap['TEXT_INPUT'], 'TEXT_INPUT'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['DATE'], 'DATE'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['TIME'], 'TIME'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['YES_NO'], 'YES_NO'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['RADIO'], 'RADIO'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['DROPDOWN'], 'DROPDOWN'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['SIGNATURE'], 'SIGNATURE'>
  | BasePatientFormFieldProps<FormFieldValueTypeMap['TEXT_AREA'], 'TEXT_AREA'>

export type ExtractPatientFormFieldProps<TFormFieldType extends FormFieldType> = Extract<PatientFormFieldProps, { type: TFormFieldType }>

export const PatientFormFieldRenderer = ({ field }: { field: PatientFormFieldProps }) => {
  const name = field.name + (field.required ? '*' : '')
  const type = field.type
  switch (type) {
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
    case 'SIGNATURE':
      return <PatientFormFieldSignature {...field} name={name} />
    case 'TEXT_AREA':
      return <PatientFormFieldTextArea {...field} name={name} />
    default:
      assertUnreachable(type)
  }
}
