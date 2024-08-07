import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { ReactNode } from 'react'
import { Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppTile } from '../common/components/AppTile'
import { ImageAutoHeight } from '../common/components/ImageAutoHeight'
import { Screen } from '../common/components/Screen'
import { usePractice } from '../common/hooks/usePractice'
import { useTheme } from '../common/hooks/useTheme'

type AppTileName = 'MESSAGES' | 'PHOTOS' | 'ANNOUNCEMENTS' | 'SERVICES' | 'FORMS' | 'ABOUT_US' | 'PROFILE' | 'REVIEW' | 'APPOINTMENTS' | 'PAYMENT'

type PatientHomeScreenProps = {
  links?: Record<AppTileName, () => void>
  reddots?: Record<AppTileName, boolean>
}

export const PatientHomeScreen = ({ links, reddots }: PatientHomeScreenProps) => {
  const practice = usePractice()
  const insets = useSafeAreaInsets()
  const { tokens } = useTheme()

  return (
    <Screen>
      <View style={{ flex: 1, paddingBottom: insets.bottom + (Platform.OS === 'android' ? tokens.spacing_s : 0), padding: tokens.spacing_s, gap: tokens.spacing_s }}>
        <View style={{ alignItems: 'center', alignSelf: 'center', gap: tokens.spacing_s }}>
          <ImageAutoHeight
            style={{
              height: 150,
              borderRadius: tokens.radius_m,
            }}
            source={practice?.data?.logo?.url || ''}
          />
          {practice.data?.slogan ? (
            <Text
              style={{
                textAlign: 'center',
                fontSize: tokens.font_size_m,
                color: tokens.color_ui_primary,
                maxWidth: '100%',
                borderRadius: tokens.radius_m,
                overflow: 'hidden',
                padding: tokens.spacing_xs,
              }}
            >
              {practice.data?.slogan}
            </Text>
          ) : null}
        </View>

        <View
          style={{
            flex: 1,
            gap: 8,
          }}
        >
          <Row>
            <AppTile onPress={links?.MESSAGES} icon={<AntDesign name='message1' />} title='MESSAGES' reddot={reddots?.MESSAGES} />
            <AppTile onPress={links?.APPOINTMENTS} icon={<AntDesign name='calendar' />} title='APPOINTMENTS' />
          </Row>

          <Row>
            <AppTile onPress={links?.ANNOUNCEMENTS} icon={<Ionicons name='megaphone-outline' />} title='ANNOUNCEMENTS' />
            <AppTile onPress={links?.SERVICES} icon={<MaterialCommunityIcons name='tooth-outline' />} title='SERVICES' />
          </Row>

          <Row>
            <AppTile onPress={links?.FORMS} icon={<AntDesign name='form' />} title='FORMS' />
            <AppTile onPress={links?.ABOUT_US} icon={<AntDesign name='infocirlceo' />} title='ABOUT US' />
          </Row>

          <Row>
            <AppTile onPress={links?.PROFILE} icon={<AntDesign name='profile' />} title='PATIENT PROFILE' />
            <AppTile onPress={links?.PHOTOS} icon={<AntDesign name='camerao' />} title='PHOTOS' />
          </Row>

          <Row>
            <AppTile onPress={links?.REVIEW} icon={<AntDesign name='staro' />} title='REVIEW' />
            <AppTile onPress={links?.PAYMENT} icon={<AntDesign name='creditcard' />} title='MAKE PAYMENT' />
          </Row>
        </View>
      </View>
    </Screen>
  )
}

const Row = ({ children }: { children: ReactNode }) => {
  const { tokens } = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        gap: 8,
      }}
    >
      {children}
    </View>
  )
}
