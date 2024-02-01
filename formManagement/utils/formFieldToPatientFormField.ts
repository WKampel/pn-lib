import { FormField, FormFieldType, FormResponse } from '../../../gql/graphql'
import { PatientFormFieldData } from '../types/PatientFormFieldData'

export function formFieldToPatientFormField(field: FormField, response?: FormResponse): PatientFormFieldData {
  const type: FormFieldType = field.type
  switch (type) {
    case 'TITLE':
      return { ...field, type: 'TITLE' as const }
    case 'TEXT_INPUT':
      return { ...field, type: 'TEXT_INPUT' as const, value: response?.textInputValue || '' }
    case 'DATE':
      return { ...field, type: 'DATE' as const, value: response?.dateValue || null }
    case 'TIME':
      return { ...field, type: 'TIME' as const, value: response?.timeValue || null }
    case 'YES_NO':
      return { ...field, type: 'YES_NO' as const, value: response?.yesNoValue || null }
    case 'RADIO':
      return { ...field, type: 'RADIO' as const, value: response?.radioValue || [] }
    case 'DROPDOWN':
      return { ...field, type: 'DROPDOWN' as const, value: response?.dropdownValue || '' }
    case 'LONG_TEXT':
      return { ...field, type: 'LONG_TEXT' as const }
    case 'SIGNATURE':
      return { ...field, type: 'SIGNATURE' as const, value: response?.signatureValue || '' }
    case 'TEXT_AREA':
      return { ...field, type: 'TEXT_AREA' as const, value: response?.textAreaValue || '' }
  }
}
