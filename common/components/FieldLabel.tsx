import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

type FieldLabelProps = {
  children: ReactNode
  label: string
  flex?: number | boolean
}

export const FieldLabel = ({ children, label, flex }: FieldLabelProps) => {
  const { tokens } = useTheme()

  return (
    <>
      <View
        style={{
          flex: flex === true ? 1 : flex ? flex : undefined,
        }}
      >
        <Text style={{ paddingBottom: tokens.spacing_xs, color: tokens.color_text_on_bg }}>{label}</Text>
        {children}
      </View>
    </>
  )
}
