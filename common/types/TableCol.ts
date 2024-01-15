import { TableCell } from './TableCell'

export type TableCol<TRow> = {
  label: string
  getCell: (row: TRow) => TableCell
  width?: number
}
