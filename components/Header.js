import { StyleSheet, Text, View } from 'react-native'
import BackButton from './BackButton'
import OpenDrawerButton from './OpenDrawerButton'

const Header = props => {
  return (
    <View style={[styles.header]}>
      {props.options?.back ? <BackButton to={props.options?.back} /> : null}
      <Text style={styles.title}>{props.options?.title || props.route.name}</Text>
      <OpenDrawerButton />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  title: {
    fontSize: 22,
  },
})
