import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BackButton from './BackButton'
import OpenDrawerButton from './OpenDrawerButton'

const Header = props => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: insets.top,
        },
        props.style,
      ]}
    >
      <View style={[styles.item, styles.headerLeft]}>{props.options?.back ? <BackButton to={props.options?.back} /> : null}</View>
      <Text style={styles.title}>{props.options?.title || props.route.name}</Text>
      <View style={[styles.item, styles.headerRight]}>
        <OpenDrawerButton />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  item: {
    flex: 1,
  },
  headerLeft: {
    alignItems: 'flex-start',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
})
