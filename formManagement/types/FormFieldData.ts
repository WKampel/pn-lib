import { FormFieldType } from '../../../gql/graphql'
import { FormFieldOptionData } from './FormFieldOptionData'

export type FormFieldData = {
  id: string
  name: string
  type: FormFieldType
  required: boolean
  options: FormFieldOptionData[]
}
