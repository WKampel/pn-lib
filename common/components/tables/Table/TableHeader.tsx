import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'
import { TableCol } from '../../../types/TableCol'
import { TableCell } from './TableCell'

export const TableHeader = <TRow extends object>({ col, onPress, activeSort }: { col: TableCol<TRow>; onPress: () => void; activeSort: boolean }) => {
  const { tokens } = useTheme()
  return (
    <TouchableOpacity
      style={[
        { flex: 1, height: tokens.size_m, backgroundColor: tokens.color_bg_surface_inverse },
        // @ts-ignore
        col.width ? { width: col.width, flex: 'unset' } : {},
      ]}
      onPress={onPress}
    >
      <TableCell col={col}>
        <Text style={[{ color: tokens.color_text_on_surface_inverse }, activeSort ? { fontWeight: 'bold' } : {}]}>{col.label || ''}</Text>
      </TableCell>
    </TouchableOpacity>
  )
}
