import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderProps } from '.'
import { useTheme } from '../../../common/hooks/useTheme'
import { BackButton } from '../BackButton'
import { OpenDrawerButton } from '../OpenDrawerButton'

const Header = ({ options, route, handleBackTo }: HeaderProps) => {
  const insets = useSafeAreaInsets()
  const tokens = useTheme()

  return (
    <View
      style={{
        backgroundColor: tokens.color_bg_surface,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: insets.top,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        {handleBackTo ? <BackButton onPress={handleBackTo} /> : null}
      </View>
      <Text
        style={{
          fontSize: tokens.font_size_l,
          flex: 1,
          textAlign: 'center',
        }}
      >
        {options?.title || route.name}
      </Text>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        <OpenDrawerButton />
      </View>
    </View>
  )
}

export default Header
