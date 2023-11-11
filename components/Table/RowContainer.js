import React from 'react'
import { FlatList } from 'react-native'
import Row from './Row'

const RowContainer = ({ rows, cols, onRowPress }) => {
  const renderItem = ({ item: row, index: rowIndex }) => (
    <Row cols={cols} row={row} onPress={() => onRowPress(row)} key={rowIndex} rowIndex={rowIndex} />
  )

  return <FlatList data={rows} renderItem={renderItem} />
}

export default RowContainer
