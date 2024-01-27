import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from '../../../common/components/Image'
import { useMe } from '../../../common/hooks/useMe'
import { usePractice } from '../../../common/hooks/usePractice'
import { useTheme } from '../../../common/hooks/useTheme'
import { mobileStyles } from '../../utils/mobileStyles'

export const PracticeDrawerHeader = () => {
  const practice = usePractice()
  const insets = useSafeAreaInsets()

  const tokens = useTheme()

  return (
    <View
      style={[
        {
          backgroundColor: tokens.color_ui_primary,
          paddingHorizontal: tokens.spacing_s,
          paddingVertical: tokens.spacing_xl,
          gap: tokens.spacing_s,
        },
        mobileStyles({ paddingTop: insets.top }),
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: tokens.spacing_s,
        }}
      >
        {practice.data?.logo?.url ? (
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: tokens.radius_s,
            }}
            source={practice.data?.logo?.url}
          />
        ) : null}
        <View
          style={{
            gap: tokens.spacing_xs,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: tokens.color_text_on_primary,
              fontSize: tokens.font_size_l,
              fontWeight: tokens.weight_heavy,
            }}
          >
            {practice.data?.name}
          </Text>
          <Text
            style={{
              color: tokens.color_text_on_primary_subtle,
              fontSize: tokens.font_size_s,
            }}
          >
            {practice.data?.slogan}
          </Text>
        </View>
      </View>
      <ProfileBubble />
    </View>
  )
}

const ProfileBubble = () => {
  const me = useMe()
  const tokens = useTheme()

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: tokens.radius_s,
        borderColor: tokens.color_border_on_surface,
        padding: tokens.spacing_s,
        gap: tokens.spacing_xs,
        flex: 1,
      }}
    >
      <AntDesign name='user' size={tokens.font_size_s} color={tokens.color_text_on_primary} />
      <Text
        style={{
          color: tokens.color_text_on_primary,
          fontSize: tokens.font_size_s,
        }}
      >
        {me?.firstName} {me?.lastName}
      </Text>
    </View>
  )
}
