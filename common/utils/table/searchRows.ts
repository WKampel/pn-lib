import { TableCol } from '../../types/TableCol'

export const searchRows = <TRow>(rows: TRow[], cols: TableCol<TRow>[], search: string): TRow[] => {
  if (!search) return rows
  const searchTerms = search.toLowerCase().split(' ')

  return rows.filter(row => {
    return cols.some(col => {
      const cellValue = col.getCell(row)
      const cellString = cellValue != null ? String(cellValue).toLowerCase() : ''
      return searchTerms.every(term => cellString.includes(term))
    })
  })
}
