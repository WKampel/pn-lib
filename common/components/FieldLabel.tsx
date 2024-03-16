import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type FieldLabelProps = {
  children: ReactNode
}

export const FieldLabel = ({ children }: FieldLabelProps) => {
  const { tokens } = useTheme()
  return <Text style={{}}>{children}</Text>
}
