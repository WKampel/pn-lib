import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useStyles from '../hooks/useStyles'
import BackButton from './BackButton.native'
import OpenDrawerButton from './OpenDrawerButton'

const Header = ({ options, route }) => {
  const insets = useSafeAreaInsets()
  const styles = useStyles(styleConfig)

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={[styles.item, styles.headerLeft]}>{options?.back ? <BackButton to={options?.back} /> : null}</View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
        {options?.title || route.name}
      </Text>
      <View style={[styles.item, styles.headerRight]}>
        <OpenDrawerButton />
      </View>
    </View>
  )
}

export default Header

const styleConfig = {
  base: {
    header: {
      backgroundColor: '$color-bg-surface',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 100,
      paddingLeft: 10,
      paddingRight: 10,
    },
    title: {
      fontSize: '$font-size-m',
      flex: 1,
      textAlign: 'center',
    },
    item: {
      flex: 0.5,
    },
    headerLeft: {
      alignItems: 'flex-start',
    },
    headerRight: {
      alignItems: 'flex-end',
    },
  },
}
