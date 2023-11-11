import { Text, View, useWindowDimensions } from 'react-native'
import useStyles from '../hooks/useStyles'
import Button from './Button'
import OpenDrawerButton from './OpenDrawerButton'

const Header = ({ options, route }) => {
  const dimensions = useWindowDimensions()
  const isMobile = dimensions.width < 900
  const styles = useStyles(styleConfig, [isMobile && 'mobile'])

  return (
    <View style={styles.header}>
      {options?.back ? <Button size='s' kind='secondary' to={options?.back} text='Back' /> : null}
      <Text style={styles.title}>{options?.title || route.name}</Text>
      {isMobile ? <OpenDrawerButton /> : <View />}
    </View>
  )
}

export default Header

const styleConfig = {
  base: {
    header: {
      flexDirection: 'row',
      gap: '$spacing-m',
      padding: '$spacing-l',
      paddingBottom: 0,
      alignItems: 'center',
    },
    title: {
      fontSize: '$font-size-l',
      fontWeight: '$weight-semi-heavy',
    },
  },
  mobile: {
    header: {
      justifyContent: 'space-between',
    },
  },
}
