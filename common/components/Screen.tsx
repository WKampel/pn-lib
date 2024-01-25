import { View } from 'react-native'

type ScreenProps = {
  children: React.ReactNode
}

export const Screen = ({ children }: ScreenProps) => {
  return <View style={{ maxWidth: 1300, flex: 1, width: '100%' }}>{children}</View>
}
