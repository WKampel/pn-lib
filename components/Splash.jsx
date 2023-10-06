import { View } from 'react-native'
import Spinner from './Spinner'

const Splash = () => {
  return (
    <View style={{ gap: 25, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Spinner />
    </View>
  )
}

export default Splash
