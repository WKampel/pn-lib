import { Entypo } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../common/hooks/useTheme'

export type BackButtonProps = { onPress: () => void }

export const BackButton = ({ onPress }: BackButtonProps) => {
  const tokens = useTheme()

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Entypo name='chevron-left' size={tokens.font_size_xl} color='black' />
      <Text
        style={{
          fontSize: tokens.font_size_s,
        }}
      >
        Back
      </Text>
    </TouchableOpacity>
  )
}
