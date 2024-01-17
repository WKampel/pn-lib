import React from 'react'
import { IconList } from '../../types/IconList'
import { Select } from '../Select.web'

export type BaseIconSelectProps = {
  onChange: (value: string) => void
  value: string
  options: IconList[]
  label?: string
}

export const BaseIconSelect = ({ onChange, value, options, label }: BaseIconSelectProps) => {
  return (
    <Select
      label={label || 'Select Icon'}
      getValue={icon => icon.id}
      getLabel={icon => icon.name}
      getLabelIcon={icon => icon.icon}
      onChange={onChange}
      value={value}
      options={options}
    />
  )
}
