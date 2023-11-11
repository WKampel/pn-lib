import React, { useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import useStyles from '../../hooks/useStyles'
import Body from './Body'
import Header from './Header'
import PaginationBar from './PaginationBar'
import Toolbar from './Toolbar'

const searchRows = (rows, cols, search) => {
  if (!search) return rows
  const lowerCaseSearchArray = search?.toLowerCase().split(' ')
  return rows.filter(row => {
    const found = cols.find(col => {
      const cell = ('' + col.getCell(row))?.toLowerCase()
      return lowerCaseSearchArray.every(item => cell.includes(item))
    })
    return found ? true : false
  })
}

const paginateRows = (rows, page, perPage) => {
  const pageCount = Math.ceil(rows.length / perPage) || 0
  const slicedRows = rows.slice(page * perPage, (page + 1) * perPage)

  return { pageCount, slicedRows }
}

const sortRows = (rowsProp, sortByCol, sortDir) => {
  const rows = [...rowsProp]

  rows.sort((a, b) => {
    const aVal = sortByCol.getCell(a)
    const bVal = sortByCol.getCell(b)

    // Check if values are either string or number
    const isAValid = typeof aVal === 'string' || typeof aVal === 'number'
    const isBValid = typeof bVal === 'string' || typeof bVal === 'number'

    // If either value is not a string or number, don't sort that row
    if (!isAValid || !isBValid) return 0

    // Use localeCompare for string comparison, which returns -1, 0, or 1
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * sortDir
    }

    // Numeric comparison
    if (aVal < bVal) return -1 * sortDir
    if (aVal > bVal) return 1 * sortDir

    return 0
  })

  return rows
}

const Table = ({ style, rows: rowsProp, cols = [], onRowPress, headerLeft, loading, perPage = 100 }) => {
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [sortByIndex, setSortByIndex] = useState(null)
  const [sortDir, setSortDir] = useState(1)

  // Styles
  const styles = useStyles(styleConfig)

  // Sort rows
  const sortedRows = useMemo(() => {
    if (sortByIndex === null) return rowsProp
    return sortRows(rowsProp, cols[sortByIndex], sortDir)
  }, [rowsProp, cols, sortByIndex, sortDir])

  // Search rows
  const rows = useMemo(() => {
    return searchRows(sortedRows, cols, search)
  }, [sortedRows, cols, search])

  // Paginate rows
  const { pageCount, slicedRows } = useMemo(() => {
    return paginateRows(rows, page, perPage)
  }, [rows, page, perPage])

  // If page is greater than pageCount, set page to pageCount - 1
  useEffect(() => {
    if (page > pageCount - 1) setPage(Math.max(pageCount - 1, 0))
  }, [pageCount])

  const onClickCol = colIndex => {
    if (sortByIndex === colIndex) {
      setSortDir(sortDir * -1)
    } else {
      setSortByIndex(colIndex)
    }
  }

  return (
    <View style={style}>
      <Toolbar totalRows={rowsProp?.length} search={search} setSearch={setSearch} loading={loading}>
        {headerLeft}
      </Toolbar>

      <View style={styles.table}>
        <Header cols={cols} onClickCol={onClickCol} sortByIndex={sortByIndex} />
        <Body cols={cols} rows={slicedRows} onRowPress={onRowPress} />
        <PaginationBar page={page} setPage={setPage} pageCount={pageCount} />
      </View>
    </View>
  )
}

const styleConfig = {
  base: {
    table: {
      overflow: 'hidden',
      flex: 1,
    },
    toolbar: {
      marginBottom: '$spacing-xs',
    },
  },
}

export default Table
