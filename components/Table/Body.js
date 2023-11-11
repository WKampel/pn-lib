import { ScrollView, Text } from 'react-native'
import useStyles from '../../hooks/useStyles'
import RowContainer from './RowContainer'

const Body = ({ cols, rows, onRowPress }) => {
  const styles = useStyles(styleConfig)

  return (
    <ScrollView style={styles.body}>
      {!rows?.length ? <Text style={styles.message}>No data</Text> : <RowContainer rows={rows} cols={cols} onRowPress={onRowPress} />}
    </ScrollView>
  )
}

const styleConfig = {
  base: {
    body: {
      flex: 1,
      borderWidth: 1,
      borderColor: '$color-border-on-surface',
      borderBottomLeftRadius: '$radius-s',
      borderBottomRightRadius: '$radius-s',
      borderTopWidth: 0,
      backgroundColor: '$color-bg-surface',
    },
    message: {
      fontWeight: '$weight-heavy',
      padding: '$spacing-s',
    },
  },
}

export default Body
