import React from 'react'
import { Pressable, Text, View } from 'react-native'
import useStyles from '../../hooks/useStyles'

const Header = ({ cols, onClickCol, sortByIndex }) => {
  const styles = useStyles(styleConfig)

  return (
    <View style={styles.headerRow}>
      {cols.map((col, colIndex) => (
        <Pressable onPress={() => onClickCol(colIndex)} style={[styles.header, col.width && { width: col.width, flex: 'unset' }]} key={colIndex}>
          <Text style={[styles.headerText, sortByIndex === colIndex && { fontWeight: 'bold' }]}>{col.label || ''}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styleConfig = {
  base: {
    header: {
      flex: 1,
      minHeight: '$size-m',
      paddingLeft: '$spacing-s',
      paddingRight: '$spacing-s',
      justifyContent: 'center',
      backgroundColor: '$color-bg-surface-inverse',
    },
    headerText: {
      color: '$color-text-on-surface-inverse',
    },
    headerRow: {
      borderTopLeftRadius: '$radius-s',
      borderTopRightRadius: '$radius-s',
      overflow: 'hidden',
      flexDirection: 'row',
    },
  },
}

export default Header
