import React from 'react'
import { Pressable, Text, View } from 'react-native'
import useInteractive from '../../hooks/useInteractive'
import useStyles from '../../hooks/useStyles'

const Row = ({ row, cols = [], onPress = () => {}, rowIndex }) => {
  const { hovered, interactiveEvents } = useInteractive()
  const styles = useStyles(styleConfig, {}, { hovered })

  return (
    <Pressable {...interactiveEvents} onPress={onPress} style={[styles.row, rowIndex % 2 === 0 && styles.evenRow]}>
      {cols.map((col, colIndex) => (
        <View style={[styles.data, col.width && { width: col.width, flex: 'unset' }]} key={colIndex}>
          <Text>{col.getCell(row)}</Text>
        </View>
      ))}
    </Pressable>
  )
}

const styleConfig = {
  base: {
    row: {
      flexDirection: 'row',
      '@hovered': {
        backgroundColor: '$color-bg-surface-emphasis',
      },
    },
    evenRow: {
      backgroundColor: '$color-bg-surface-alternate',
      '@hovered': {
        backgroundColor: '$color-bg-surface-emphasis',
      },
    },
    data: {
      flex: 1,
      minHeight: '$size-m',
      paddingLeft: '$spacing-s',
      paddingRight: '$spacing-s',
      justifyContent: 'center',
    },
  },
}

export default Row
