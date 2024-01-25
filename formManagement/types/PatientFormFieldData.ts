import { FormFieldType } from '../../../gql/graphql'
import { FormFieldOptionData } from './FormFieldOptionData'

type BaseField = {
  id: string
  name: string
  type: FormFieldType
  required: boolean
  options: FormFieldOptionData[]
}

type DateField = BaseField & {
  type: 'DATE'
  value: Date | null
}

type DropDownField = BaseField & {
  type: 'DROPDOWN'
  value: string
}

type LongTextField = BaseField & {
  type: 'LONG_TEXT'
}

type RadioField = BaseField & {
  type: 'RADIO'
  value: string[]
}

type SignatureField = BaseField & {
  type: 'SIGNATURE'
  value: string
}

type TextAreaField = BaseField & {
  type: 'TEXT_AREA'
  value: string
}

type TextInputField = BaseField & {
  type: 'TEXT_INPUT'
  value: string
}

type TimeField = BaseField & {
  type: 'TIME'
  value: Date | null
}

type TitleField = BaseField & {
  type: 'TITLE'
}

type YesNoField = BaseField & {
  type: 'YES_NO'
  value: boolean | null
}

export type PatientFormFieldData =
  | DateField
  | DropDownField
  | LongTextField
  | RadioField
  | SignatureField
  | TextAreaField
  | TextInputField
  | TimeField
  | TitleField
  | YesNoField

export type PatientFormFieldDataWithValue = Exclude<PatientFormFieldData, TitleField | LongTextField>
