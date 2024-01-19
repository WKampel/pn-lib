import { Text, View, useWindowDimensions } from 'react-native'
import { SolidButton } from '../../common/components/buttons/SolidButton'
import { useTheme } from '../../common/hooks/useTheme'
import { OpenDrawerButton } from './OpenDrawerButton'

type HeaderProps = {
  options?: {
    title?: string
    back?: string
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
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: isMobile ? 'space-between' : undefined,
      }}
    >
      {options?.back ? <SolidButton size='s' variant='secondary' onPress={handleBackTo} text='Back' /> : null}
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
