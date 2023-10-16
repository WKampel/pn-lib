import OrderButtons from './OrderButtons'
import Table from './Table'

const OrderedTable = ({ cols: colsProp, onUp, onDown, ...other }) => {
  // Add order col to cols
  const cols = [...colsProp, { label: '', width: 50, getCell: row => <OrderButtons onUp={() => onUp(row)} onDown={() => onDown(row)} /> }]

  return <Table {...other} cols={cols}></Table>
}

export default OrderedTable
