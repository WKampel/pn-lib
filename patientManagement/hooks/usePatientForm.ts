import { useForm } from '../../common/hooks/useForm'
import { PatientFormFieldData, PatientFormFieldDataWithValue } from '../types/PatientFormFieldData'

export type OnChangeResponseValueFn = <T extends PatientFormFieldDataWithValue['type']>(
  field: Extract<PatientFormFieldDataWithValue, { type: T }>,
  value: Extract<PatientFormFieldDataWithValue, { type: T }>['value']
) => void

export const usePatientForm = () => {
  const { data, onChangeField, updateInitialState, isModified } = useForm<{
    fields: PatientFormFieldData[]
  }>({
    fields: [],
  })

  const onChangeResponseValue: OnChangeResponseValueFn = (field, value) => {
    let newFields = [...data.fields]
    const index = newFields.findIndex(f => f.id === field.id)
    if (index === -1) return

    newFields[index] = { ...field, value }

    onChangeField('fields')(newFields)
  }

  return {
    fields: data.fields,
    isModified,
    onChangeFieldValue,
    updateInitialState,
  }
}
