import { TableCol } from '../../types/TableCol'
import { TableSortDir } from '../../types/TableSortDir'

export const sortRows = <TRow>(rows: TRow[], sortByCol: TableCol<TRow>, sortDir: TableSortDir) => {
  const copy = [...rows]

  copy.sort((a, b) => {
    const aVal = sortByCol.getCell(a)
    const bVal = sortByCol.getCell(b)

    // Strings
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * sortDir
    }

    // Numbers
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      if (aVal < bVal) return -1 * sortDir
      if (aVal > bVal) return 1 * sortDir
      return 0
    }

    // Other, don't sort
    return 0
  })

  return copy
}
