import { Text, View } from 'react-native'
import { FormFieldType } from '../../../../gql/graphql'
import { FormFieldValueTypeMap } from '../../../../pn-core-lib/types/FormField'
import { useTheme } from '../../../common/hooks/useTheme'
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
  | BasePatientFormFieldProps<null, 'TITLE'>
  | BasePatientFormFieldProps<null, 'LONG_TEXT'>
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
  const type = field.type

  switch (type) {
    case 'TITLE':
      return <PatientFormFieldTitle {...field} name={field.name} />
    case 'LONG_TEXT':
      return <PatientFormFieldLongText {...field} name={field.name} />
    case 'TEXT_INPUT':
      return withLabel(<PatientFormFieldTextInput {...field} name={field.name} />, field.name, field.required)
    case 'DATE':
      return withLabel(<PatientFormFieldDate {...field} name={field.name} />, field.name, field.required)
    case 'TIME':
      return withLabel(<PatientFormFieldTime {...field} name={field.name} />, field.name, field.required)
    case 'YES_NO':
      return withLabel(<PatientFormFieldYesNo {...field} name={field.name} />, field.name, field.required)
    case 'RADIO':
      return withLabel(<PatientFormFieldRadio {...field} name={field.name} />, field.name, field.required)
    case 'DROPDOWN':
      return withLabel(<PatientFormFieldSelect {...field} name={field.name} />, field.name, field.required)
    case 'SIGNATURE':
      return withLabel(<PatientFormFieldSignature {...field} name={field.name} />, field.name, field.required)
    case 'TEXT_AREA':
      return withLabel(<PatientFormFieldTextArea {...field} name={field.name} />, field.name, field.required)
    default:
      assertUnreachable(type)
  }
}

const withLabel = (field: JSX.Element, name: string, required: boolean) => {
  const tokens = useTheme()
  return (
    <View style={{ gap: tokens.spacing_xs, backgroundColor: tokens.color_bg_surface_alternate, padding: tokens.spacing_s, borderRadius: tokens.radius_s }}>
      <View
        style={{
          minHeight: tokens.size_s,
          alignItems: 'center',
          flexDirection: 'row',
          gap: tokens.spacing_xs,
          paddingHorizontal: tokens.spacing_xs,
        }}
      >
        <Text style={{}}>{name}</Text>
        {required ? <Text style={{ color: tokens.color_danger }}>(required)</Text> : null}
      </View>
      {field}
    </View>
  )
}
