import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useDebounce from '../../libs/useDebounce'
import TextInput from '../textInput'
import { Context as StyleContext } from '../../contexts/style'
import Field from '../field'

export default props => {
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState()
  const style = useContext(StyleContext)

  const perPage = 100

  let rows = props.rows || []
  const cols = props.cols || []

  const lowerCaseSearchArray = search?.toLowerCase()?.split(' ')
  if (search) rows = rows.filter(row => lowerCaseSearchArray.every(item => JSON.stringify(row)?.toLowerCase().includes(item)))

  const pageCount = Math.ceil(rows.length / perPage) || 0
  rows = rows.slice(page * perPage, (page + 1) * perPage) || []

  useEffect(() => {
    if (page > pageCount - 1) setPage(Math.max(pageCount - 1, 0))
  }, [pageCount])

  return (
    <>
      <Field>
        <TextInput containerStyle={styles.search} placeholder='Search' onChangeText={setSearch} value={search} />
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
            <PageBar page={page} pageCount={pageCount} />

            {props.status == 'loading' ? (
              <View style={styles.row}>
                <View style={styles.data}>
                  <Text style={styles.loading}>Loading</Text>
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
                      <View style={styles.data} key={colIndex}>
                        <Text>{col.getCell(row)}</Text>
                      </View>
                    ))}
                  </Pressable>
                )}
              />
            )}
          </View>
        </View>

        <PageBar page={page} pageCount={pageCount} />
      </View>
    </>
  )
}

const PageBar = props => {
  if (props.pageCount <= 1) return <></>
  return (
    <ScrollView style={styles.pageContainer} horizontal={true}>
      {[...Array(parseInt(props.pageCount))].map((x, i) => (
        <Pressable key={i} onPress={() => setPage(i)}>
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
    borderRadius: 50,
    maxWidth: 250,
    marginBottom: -5,
  },
})
