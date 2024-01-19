import React from 'react'
import { IconSet } from '../types/IconSet'
import { Icon } from './Icon'
import { Select } from './Select.web'

export type IconSelectProps = {
  onChange: (value: string) => void
  value: string
  label?: string
  set: IconSet
}

export const IconSelect = ({ onChange, value, label, set }: IconSelectProps) => {
  const options = Object.keys(set).map(key => ({ label: set[key].label, value: key }))
  return (
    <Select
      label={label || 'Select Icon'}
      getValue={icon => icon.value}
      getLabel={icon => icon.label}
      getLabelIcon={icon => <Icon id={icon.value} set={set} />}
      onChange={onChange}
      value={value}
      options={options}
    />
  )
}
