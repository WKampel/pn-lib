import { View } from 'react-native'
import useStyles from '../../hooks/useStyles'
import Spinner from '../Spinner'
import TextInput from '../TextInput'

const Toolbar = ({ children, search, setSearch, loading, totalRows }) => {
  const styles = useStyles(styleConfig)

  return (
    <View style={styles.toolbar}>
      {children}
      <Spinner visible={loading} style={styles.spinner} />
      <TextInput containerStyle={styles.search} round placeholder={`Search ${totalRows} row${totalRows === 1 ? '' : 's'}`} value={search} onChange={setSearch} />
    </View>
  )
}

const styleConfig = {
  base: {
    toolbar: {
      marginBottom: '$spacing-xs',
      flexDirection: 'row',
      gap: '$spacing-xs',
    },
    search: {
      flex: 1,
      maxWidth: 300,
    },
    spinner: {
      marginLeft: 'auto',
    },
  },
}

export default Toolbar
