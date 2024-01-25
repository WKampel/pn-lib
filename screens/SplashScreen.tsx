import { ActivityIndicator, View } from 'react-native'

export const SplashScreen = () => {
  return (
    <View style={{ gap: 25, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <ActivityIndicator animating={true} />
    </View>
  )
}
