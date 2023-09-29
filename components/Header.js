import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import BackButton from './BackButton'
import OpenDrawerButton from './OpenDrawerButton'

const Header = props => {
  const dimensions = useWindowDimensions()

  return (
    <View style={[styles.header, dimensions.width < 900 && styles.mobileHeader]}>
      {props.options?.back ? <BackButton to={props.options?.back} /> : null}
      <Text style={styles.title}>{props.options?.title || props.route.name}</Text>
      {dimensions.width < 900 ? <OpenDrawerButton /> : <View />}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  mobileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
  },
})
