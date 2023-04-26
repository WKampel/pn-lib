import React, { useContext, useEffect } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useDebounce from '../../libs/useDebounce'
import TextInput from '../textInput'
import { Context as StyleContext } from '../../contexts/style'
import Field from '../field'
import useState from '../../libs/useState'

export default props => {
  const page = useState(0)
  const search = useState('')
  const style = useContext(StyleContext)

  const perPage = 100

  let rows = Array.isArray(props.rows) ? props.rows : []
  const cols = Array.isArray(props.cols) ? props.cols : []

  const lowerCaseSearchArray = search.val?.toLowerCase()?.split(' ')
  if (search.val) rows = rows.filter(row => lowerCaseSearchArray.every(item => JSON.stringify(row)?.toLowerCase().includes(item)))

  const pageCount = Math.ceil(rows.length / perPage) || 0
  rows = rows.slice(page.val * perPage, (page.val + 1) * perPage) || []

  useEffect(() => {
    if (page.val > pageCount - 1) page.set(Math.max(pageCount - 1, 0))
  }, [pageCount])

  return (
    <>
      <Field>
        {props.headerLeft}
        <TextInput containerStyle={styles.search} placeholder='Search' state={search} />
      </Field>
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          <View style={[styles.row, styles.headerRow]}>
            {cols.map((col, colIndex) => (
              <View style={[styles.header, { backgroundColor: style.primaryColor }]} key={colIndex}>
                <Text style={styles.headerText}>{col.label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.body}>
            <PageBar page={page.val} pageCount={pageCount} />

            {props.loading ? (
              <View style={styles.row}>
                <View style={styles.data}>
                  <Text style={styles.loading}>Loading</Text>
                </View>
              </View>
            ) : !props.rows?.length ? (
              <View style={styles.row}>
                <View style={styles.data}>
                  <Text style={styles.loading}>No Data</Text>
                </View>
              </View>
            ) : (
              <FlatList
                data={rows || []}
                renderItem={({ item: row, index: rowIndex }) => (
                  <Pressable
                    onPress={() => props.onRowPress && props.onRowPress(row)}
                    style={[styles.row, rowIndex == rows.length - 1 ? styles.lastRow : {}]}
                    key={rowIndex}
                  >
                    {cols.map((col, colIndex) => (
                      <View style={[styles.data]} key={colIndex}>
                        <Text>{col.getCell(row)}</Text>
                      </View>
                    ))}
                  </Pressable>
                )}
              />
            )}
          </View>
        </View>

        <PageBar page={page.val} pageCount={pageCount} />
      </View>
    </>
  )
}

const PageBar = props => {
  if (props.pageCount <= 1) return <></>
  return (
    <ScrollView style={styles.pageContainer} horizontal={true}>
      {[...Array(parseInt(props.pageCount))].map((x, i) => (
        <Pressable key={i} onPress={() => page.set(i)}>
          <Text style={[styles.pageItem, i == props.page ? styles.activePageItem : {}, i == props.page ? { color: styles.primaryColor } : {}]}>
            {i + 1}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tableContainer: {},
  table: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 3,
  },
  row: { flexDirection: 'row', borderColor: 'rgb(220, 220, 220)', borderBottomWidth: 1 },
  body: {
    borderColor: 'rgb(220, 220, 220)',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  header: {
    flex: 1,
    minHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  data: { flex: 1, minHeight: 40, paddingLeft: 10, paddingRight: 10, justifyContent: 'center' },

  loading: {
    fontWeight: 'bold',
  },
  headerRow: {
    borderBottomWidth: 0,
  },
  lastRow: {},
  pageContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'rgb(245,245,245)',
  },
  pageItem: {
    padding: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'rgb(100, 100, 100)',
  },
  activePageItem: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  search: {
    marginLeft: 'auto',
    maxWidth: 250,
  },
})
