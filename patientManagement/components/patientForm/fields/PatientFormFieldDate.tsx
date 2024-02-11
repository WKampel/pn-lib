import moment from 'moment'
import React from 'react'
import { DayInput } from '../../../../common/components/DayInput'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldDate = ({ value, onChange, name }: ExtractPatientFormFieldProps<'DATE'>) => {
  const stringValue = value ? moment.utc(value).format('YYYY-MM-DD') : ''

  const handleChange = (dateString: string) => {
    const newValue = dateString ? moment.utc(dateString, 'YYYY-MM-DD').toDate() : null
    onChange(newValue)
  }

  return <DayInput value={stringValue} onChange={handleChange} label='' />
}
