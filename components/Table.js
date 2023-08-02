import React, { useEffect } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useState from '../hooks/useState'
import Field from './Field'
import TextInput from './TextInput'

const useSearch = (rows, searchValue) => {
  return rows.filter(row => {
    const lowerCaseSearchArray = searchValue.toLowerCase().split(' ')
    return lowerCaseSearchArray.every(item => JSON.stringify(row)?.toLowerCase().includes(item))
  })
}

const usePagination = (rows, page, perPage) => {
  const pageCount = Math.ceil(rows.length / perPage) || 0
  const slicedRows = rows.slice(page * perPage, (page + 1) * perPage)

  return { pageCount, slicedRows }
}

const Header = ({ cols }) => (
  <View style={[styles.row, styles.headerRow]}>
    {cols.map((col, colIndex) => (
      <View style={styles.header} key={colIndex}>
        <Text style={styles.headerText}>{col.label || ''}</Text>
      </View>
    ))}
  </View>
)

const Rows = ({ rows, cols, onRowPress }) => (
  <FlatList
    data={rows}
    renderItem={({ item: row, index: rowIndex }) => <Row cols={cols} row={row} onPress={() => onRowPress(row)} key={rowIndex} rowIndex={rowIndex} />}
  />
)

const Row = ({ row, cols, onPress = () => {}, rowIndex }) => {
  return (
    <Pressable onPress={onPress} style={[styles.row, rowIndex % 2 === 0 && styles.evenRow]}>
      {cols.map((col, colIndex) => (
        <View style={styles.data} key={colIndex}>
          <Text>{col.getCell(row)}</Text>
        </View>
      ))}
    </Pressable>
  )
}

// Main component
export default Table = props => {
  const page = useState(0)
  const search = useState('')
  const { rows: rowsProp, cols = [], onRowPress, headerLeft, loading } = props

  const rows = useSearch(rowsProp || [], search.val)
  const { pageCount, slicedRows } = usePagination(rows, page.val, 100)

  useEffect(() => {
    if (page.val > pageCount - 1) page.set(Math.max(pageCount - 1, 0))
  }, [pageCount])

  return (
    <>
      <Field>
        {headerLeft}
        <TextInput containerStyle={styles.search} variants={['round']} placeholder='Search' state={search} />
      </Field>
      <View style={styles.table}>
        <Header cols={cols} />
        <ScrollView style={styles.body}>
          {loading ? (
            <Text style={styles.loading}>Loading...</Text>
          ) : !rowsProp?.length ? (
            <Text style={styles.loading}>No data</Text>
          ) : (
            <Rows rows={slicedRows} cols={cols} onRowPress={onRowPress} />
          )}
        </ScrollView>
        <PageBar page={page} pageCount={pageCount} />
      </View>
    </>
  )
}

const PageBar = props => {
  if (props.pageCount <= 1) return <></>
  return (
    <View>
      <ScrollView style={styles.pageContainer} horizontal={true}>
        {[...Array(parseInt(props.pageCount))].map((x, i) => (
          <Pressable key={i} onPress={() => props.page.set(i)}>
            <Text style={[styles.pageItem, i == props.page.val ? styles.activePageItem : null]}>{i + 1}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  table: {
    backgroundColor: 'white',
    overflow: 'hidden',
    maxHeight: 500,
  },
  row: { flexDirection: 'row' },
  evenRow: { backgroundColor: 'whitesmoke' },
  body: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 220)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0,
  },
  header: {
    flex: 1,
    minHeight: 40,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    backgroundColor: '#36304a',
  },
  headerText: {
    color: 'white',
  },
  data: { flex: 1, minHeight: 40, paddingLeft: 15, paddingRight: 15, justifyContent: 'center' },

  loading: {
    fontWeight: 'bold',
    padding: 10,
  },
  headerRow: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  pageContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'rgb(220,220,230)',
  },
  pageItem: {
    padding: 5,
    color: 'rgb(100, 100, 100)',
  },
  activePageItem: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  search: {
    marginLeft: 'auto',
    width: 300,
  },
})
