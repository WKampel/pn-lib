import React from 'react'
import { IconMap } from '../types/IconMap'
import { Icon } from './Icon'
import { Select } from './Select.web'

export type IconSelectProps = {
  onChange: (value: string) => void
  value: string
  label?: string
  set: IconMap
}

export const IconSelect = ({ onChange, value, label, set }: IconSelectProps) => {
  const options = Object.keys(set).map(key => ({ label: set[key].label, value: key }))
  return (
    <Select
      label={label || 'Select Icon'}
      getValue={icon => icon.value}
      getLabel={icon => icon.label}
      getLabelIcon={icon => <Icon id={icon.value} icons={set} />}
      onChange={onChange}
      value={value}
      options={options}
    />
  )
}
