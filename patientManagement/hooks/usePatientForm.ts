import { useEffect, useState } from 'react'
import { FormField, FormResponse } from '../../../gql/graphql'
import { assertUnreachable } from '../../core/utils/assertUnreachable'
import { PatientFormFieldProps } from '../components/patientForm/PatientFormFieldRenderer'

export const usePatientForm = (formFields: FormField[], formResponses: FormResponse[]) => {
  const [formState, setFormState] = useState<Record<FormField['id'], PatientFormFieldProps>>({})

  useEffect(() => {
    const initialState = formFields.reduce((acc, field) => {
      const response = formResponses.find(res => res.formFieldId === field.id)
      const type = field.type

      switch (type) {
        case 'TEXT_INPUT':
        case 'DROPDOWN':
        case 'SIGNATURE':
        case 'TEXT_AREA':
          acc[field.id] = {
            id: field.id,
            name: field.name,
            type: type,
            required: field.required,
            options: field.options,
            value: response?.stringValue || '',
            onChange: (value: string) => {
              const copy = { ...formState }
              copy[field.id].value = value
              setFormState(copy)
            },
          }
          break
        case 'DATE':
        case 'TIME':
          acc[field.id] = {
            id: field.id,
            name: field.name,
            type: type,
            required: field.required,
            options: field.options,
            value: response?.dateValue || new Date(),
            onChange: (value: Date) => {
              const copy = { ...formState }
              copy[field.id].value = value
              setFormState(copy)
            },
          }
          break
        case 'YES_NO':
          acc[field.id] = {
            id: field.id,
            name: field.name,
            type: type,
            required: field.required,
            options: field.options,
            value: response?.booleanValue === true ? true : response?.booleanValue === false ? false : null,
            onChange: (value: boolean | null) => {
              const copy = { ...formState }
              copy[field.id].value = value
              setFormState(copy)
            },
          }
          break
        case 'RADIO':
          acc[field.id] = {
            id: field.id,
            name: field.name,
            type: type,
            required: field.required,
            options: field.options,
            value: response?.stringArrayValue || [],
            onChange: (value: string[]) => {
              const copy = { ...formState }
              copy[field.id].value = value
              setFormState(copy)
            },
          }
          break
        case 'TITLE':
        case 'LONG_TEXT':
          break
        default:
          assertUnreachable(type)
      }

      return acc
    }, {} as Record<FormField['id'], PatientFormFieldProps>)

    setFormState(initialState)
  }, [formFields, formResponses])

  const handleSubmit = () => {}

  return { formState, handleSubmit }
}
