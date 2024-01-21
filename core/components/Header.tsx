import { Text, View, useWindowDimensions } from 'react-native'
import { SolidButton } from '../../common/components/buttons/SolidButton'
import { useTheme } from '../../common/hooks/useTheme'
import { OpenDrawerButton } from './OpenDrawerButton'

type HeaderProps = {
  options?: {
    title?: string
  }
  route: {
    name: string
  }
  handleBackTo?: () => void
}

export const Header = ({ options, route, handleBackTo }: HeaderProps) => {
  const dimensions = useWindowDimensions()
  const isMobile = dimensions.width < 900
  const tokens = useTheme()

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: tokens.spacing_m,
        padding: tokens.spacing_l,
        alignItems: 'center',
        justifyContent: isMobile ? 'space-between' : undefined,
        backgroundColor: tokens.color_bg_surface_alt,
        borderBottomWidth: 1,
        borderColor: tokens.color_border_on_surface,
      }}
    >
      {handleBackTo ? <SolidButton size='s' variant='secondary' onPress={handleBackTo} text='Back' /> : null}
      <Text
        style={{
          fontSize: tokens.font_size_l,
          fontWeight: tokens.weight_semi_heavy,
        }}
      >
        {options?.title || route.name}
      </Text>
      {isMobile ? <OpenDrawerButton /> : <View />}
    </View>
  )
}
