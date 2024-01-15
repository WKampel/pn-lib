import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'
import { TableCol } from '../../../types/TableCol'
import { TableCell } from './TableCell'

export const TableRow = <TRow extends object>({ onPress, row, cols, even }: { onPress: () => void; row: TRow; cols: TableCol<TRow>[]; even: boolean }) => {
  const tokens = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: even ? tokens.color_bg_surface_alternate : tokens.color_bg_surface,
          flexDirection: 'row',
        },
        isHovered ? { backgroundColor: tokens.color_bg_surface_emphasis } : {},
      ]}
      onPress={onPress}
      // @ts-ignore
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <>
        {cols.map((col, colIndex) => (
          <TableCell key={colIndex} col={col}>
            <Text>{col.getCell(row)}</Text>
          </TableCell>
        ))}
      </>
    </TouchableOpacity>
  )
}
