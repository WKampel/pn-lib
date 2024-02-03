import { useEffect, useState } from 'react'
import { FormField, FormResponse } from '../../../gql/graphql'
import { assertUnreachable } from '../../core/utils/assertUnreachable'
import { PatientFormFieldProps } from '../components/patientForm/PatientFormFieldRenderer'

export const usePatientForm = (initialFormFields: FormField[], initialFormResponses: FormResponse[]) => {
  const [formState, setFormState] = useState<PatientFormFieldProps[]>([])

  const updateFormState = (fieldId: string, newValue: any) => {
    setFormState(currentFormState => currentFormState.map(field => (field.id === fieldId ? { ...field, value: newValue } : field)))
  }

  const setState = (formFields: FormField[], formResponses: FormResponse[]) => {
    const initialState = formFields
      .map(field => {
        const response = formResponses.find(res => res.formFieldId === field.id)
        const type = field.type

        const commonProps = {
          id: field.id,
          name: field.name,
          type,
          required: field.required,
          options: field.options,
        }

        let value
        let onChange

        switch (type) {
          case 'TEXT_INPUT':
          case 'DROPDOWN':
          case 'SIGNATURE':
          case 'TEXT_AREA':
            value = response?.stringValue || ''
            onChange = (newValue: string) => updateFormState(field.id, newValue)
            break
          case 'DATE':
          case 'TIME':
            value = response?.dateValue || null
            onChange = (newValue: Date | null) => updateFormState(field.id, newValue)
            break
          case 'YES_NO':
            value = typeof response?.booleanValue === 'boolean' ? response.booleanValue : null
            onChange = (newValue: boolean | null) => updateFormState(field.id, newValue)
            break
          case 'RADIO':
            value = response?.stringArrayValue || []
            onChange = (newValue: string[]) => updateFormState(field.id, newValue)
            break
          case 'TITLE':
          case 'LONG_TEXT':
            return null
          default:
            assertUnreachable(type)
        }

        return { ...commonProps, value, onChange }
      })
      .filter(Boolean) as PatientFormFieldProps[]

    setFormState(initialState)
  }

  useEffect(() => {
    setState(initialFormFields, initialFormResponses)
  }, [])

  const updateInitialState = (formFields: FormField[], formResponses: FormResponse[]) => {
    setState(formFields, formResponses)
  }

  return { formState, updateInitialState }
}
