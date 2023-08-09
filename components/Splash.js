import { StyleSheet, Text, View } from 'react-native'
import Image from './Image'

const Splash = () => {
  return (
    <View style={{ gap: 25, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Image src={require('../assets/platform-now-app-builder-logo.png')} style={styles.logo} />
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    aspectRatio: 576 / 87,
  },
})

export default Splash
