import React from 'react'
import { View } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'
import { TableCol } from '../../../types/TableCol'

export const TableCell = <TRow extends object>({ children, col, style }: { children: React.ReactNode; col: TableCol<TRow>; style?: object }) => {
  const { tokens } = useTheme()
  return (
    <View
      style={[{ flex: 1, height: tokens.size_m, justifyContent: 'center', paddingHorizontal: tokens.spacing_s }, col.width ? { width: col.width, flex: 'unset' } : {}, style]}
    >
      {children}
    </View>
  )
}
