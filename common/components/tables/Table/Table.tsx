import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'
import { TableCol } from '../../../types/TableCol'
import { TableSortDir } from '../../../types/TableSortDir'
import { paginateRows } from '../../../utils/table/paginateRows'
import { searchRows } from '../../../utils/table/searchRows'
import { sortRows } from '../../../utils/table/sortRows'
import { PaginationBar } from './PaginationBar'
import { SearchTextInput } from './SearchTextInput'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

export type TableProps<TRow extends object> = {
  style?: object
  rows: TRow[]
  cols: TableCol<TRow>[]
  onRowPress?: (row: TRow) => void
  headerLeft?: ReactNode
  loading?: boolean
  perPage?: number
  getRowId: (row: TRow) => TRow[keyof TRow]
}

export const Table = <TRow extends object>({ style, rows: rowsProp, cols = [], onRowPress, headerLeft, loading, perPage = 100, getRowId }: TableProps<TRow>) => {
  const { tokens } = useTheme()
  const [page, setPage] = useState<number>(0)
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [sortByIndex, setSortByIndex] = useState<number | null>(null)
  const [sortDir, setSortDir] = useState<TableSortDir>(1)

  const totalRowCount = rowsProp.length

  // Sort rows
  const sortedRows = useMemo(() => (sortByIndex === null ? rowsProp : sortRows(rowsProp, cols[sortByIndex], sortDir)), [rowsProp, cols, sortByIndex, sortDir])

  // Search rows
  const rows = useMemo(() => searchRows(sortedRows, cols, searchKeyword), [sortedRows, cols, searchKeyword])

  // Paginate rows
  const { pageCount, slicedRows } = useMemo(() => paginateRows(rows, page, perPage), [rows, page, perPage])

  useEffect(() => {
    setPage(prevPage => Math.max(Math.min(prevPage, pageCount - 1), 0))
  }, [pageCount])

  const onClickCol = useCallback(
    (colIndex: number) => {
      setSortByIndex(prevIndex => colIndex)
      if (sortByIndex === colIndex) {
        setSortDir(prevDir => (prevDir === 1 ? -1 : 1))
      }
    },
    [sortByIndex, setSortByIndex, setSortDir]
  )

  const renderRow = useCallback(
    ({ item, index }: { item: TRow; index: number }) => (
      <TableRow cols={cols} row={item} onPress={() => onRowPress?.(item)} key={getRowId(item) as string} even={index % 2 === 0} />
    ),
    [cols, onRowPress, getRowId]
  )

  return (
    <View
      style={[
        {
          gap: tokens.spacing_xs,
        },
        style,
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: tokens.spacing_m }}>
        {headerLeft}
        {<ActivityIndicator animating={loading} style={{ marginLeft: 'auto' }} />}
        <SearchTextInput flex style={{ maxWidth: 300 }} totalRowCount={totalRowCount} value={searchKeyword} onChange={setSearchKeyword} />
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            borderTopLeftRadius: tokens.radius_s,
            borderTopRightRadius: tokens.radius_s,
            overflow: 'hidden',
          }}
        >
          {cols.map((col, colIndex) => (
            <TableHeader key={colIndex} col={col} onPress={() => onClickCol(colIndex)} activeSort={sortByIndex === colIndex} />
          ))}
        </View>

        <FlatList<TRow>
          ListEmptyComponent={
            <View style={{ padding: tokens.spacing_s }}>
              <Text>No data</Text>
            </View>
          }
          keyExtractor={row => getRowId(row) as string}
          data={slicedRows}
          renderItem={renderRow}
          contentContainerStyle={{}}
          style={{
            borderBottomLeftRadius: tokens.radius_s,
            borderBottomRightRadius: tokens.radius_s,
            borderColor: tokens.color_border_on_surface,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
          }}
        />
      </View>

      <PaginationBar page={page} onPressPage={setPage} pageCount={pageCount} />
    </View>
  )
}
