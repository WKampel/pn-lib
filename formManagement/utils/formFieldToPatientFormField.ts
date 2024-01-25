import { FormField, FormFieldType } from '../../../gql/graphql'
import { PatientFormFieldData } from '../types/PatientFormFieldData'

export function formFieldToPatientFormField(field: FormField): PatientFormFieldData {
  const type: FormFieldType = field.type
  switch (type) {
    case 'TITLE':
      return { ...field, type: 'TITLE' as const }
    case 'TEXT_INPUT':
      return { ...field, type: 'TEXT_INPUT' as const, value: '' }
    case 'DATE':
      return { ...field, type: 'DATE' as const, value: null }
    case 'TIME':
      return { ...field, type: 'TIME' as const, value: null }
    case 'YES_NO':
      return { ...field, type: 'YES_NO' as const, value: null }
    case 'RADIO':
      return { ...field, type: 'RADIO' as const, value: [] }
    case 'DROPDOWN':
      return { ...field, type: 'DROPDOWN' as const, value: '' }
    case 'LONG_TEXT':
      return { ...field, type: 'LONG_TEXT' as const }
    case 'SIGNATURE':
      return { ...field, type: 'SIGNATURE' as const, value: '' }
    case 'TEXT_AREA':
      return { ...field, type: 'TEXT_AREA' as const, value: '' }
  }
}
