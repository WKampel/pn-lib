import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '../../common/hooks/useTheme'
import { useDrawer } from '../hooks/useDrawer'

export const OpenDrawerButton = () => {
  const { setOpen } = useDrawer()
  const tokens = useTheme()

  return (
    <TouchableOpacity
      style={{
        height: '100%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -10,
      }}
      onPress={() => setOpen(true)}
    >
      <Ionicons name='menu' color='black' size={tokens.font_size_xl} />
    </TouchableOpacity>
  )
}
