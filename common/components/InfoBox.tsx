import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useTheme } from '../hooks/useTheme'

export const InfoBox = ({ text }: { text: string }) => {
  const { tokens } = useTheme()

  return (
    <View
      style={{
        backgroundColor: '#e6f5fa',
        borderColor: '#0096c7',
        borderWidth: 1,
        padding: tokens.spacing_s,
        borderRadius: tokens.radius_s,
        alignItems: 'center',
        gap: tokens.spacing_s,
        flexDirection: 'row',
      }}
    >
      <AntDesign name='infocirlceo' size={24} color='black' />
      <Text
        style={{
          color: 'black',
          fontSize: tokens.font_size_m,
        }}
      >
        {text}
      </Text>
    </View>
  )
}
