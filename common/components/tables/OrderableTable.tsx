import { OrderButtons } from '../buttons/OrderButtons'
import { Table, TableProps } from './Table/Table'

export type OrderedTableProps<TRow extends object> = TableProps<TRow> & {
  onUp: (row: TRow) => void
  onDown: (row: TRow) => void
}

export const OrderedTable = <TRow extends object>({ onUp, onDown, ...props }: OrderedTableProps<TRow>) => {
  return <Table {...props} cols={[...props.cols, { label: '', width: 65, getCell: row => <OrderButtons onUp={() => onUp(row)} onDown={() => onDown(row)} /> }]}></Table>
}
