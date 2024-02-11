import moment from 'moment'
import React from 'react'
import { TimeInput } from '../../../../common/components/TimeInput'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldTime = ({ value, onChange, name }: ExtractPatientFormFieldProps<'TIME'>) => {
  const stringValue = value ? moment.utc(value).local().format('hh:mm A') : ''

  const handleChange = (timeString: string) => {
    const newValue = timeString ? moment().format('YYYY-MM-DD') : null
    if (newValue) {
      const dateTimeString = `${newValue} ${timeString}`
      const utcValue = moment(dateTimeString, 'YYYY-MM-DD hh:mm A').utc().toDate()
      onChange(utcValue)
    } else {
      onChange(null)
    }
  }

  return <TimeInput value={stringValue} onChange={handleChange} label='' />
}
