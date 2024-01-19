import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppTile } from '../common/components/AppTile'
import { ImageAutoHeight } from '../common/components/ImageAutoHeight'
import { Screen } from '../common/components/Screen'
import { NavAction } from '../common/hooks/useNav'
import { usePractice } from '../common/hooks/usePractice'
import { useTheme } from '../common/hooks/useTheme'

type AppTileName = 'MESSAGES' | 'CHECK_IN' | 'ANNOUNCEMENTS' | 'SERVICES' | 'FORMS' | 'ABOUT_US' | 'PROFILE' | 'REVIEW' | 'APPOINTMENTS' | 'PAYMENT'

type PatientHomeScreenProps = {
  links?: Record<AppTileName, NavAction>
}

export const PatientHomeScreen = ({ links }: PatientHomeScreenProps) => {
  const practice = usePractice()
  const insets = useSafeAreaInsets()
  const tokens = useTheme()

  return (
    <Screen>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <View style={{ gap: tokens.spacing_xs, alignItems: 'center', marginBottom: tokens.spacing_s }}>
          <ImageAutoHeight
            style={{
              height: 125,
              borderRadius: tokens.radius_m,
            }}
            source={practice?.data?.logo?.url || ''}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: tokens.font_size_s,
            }}
          >
            {practice.data?.slogan}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            gap: tokens.spacing_s,
          }}
        >
          <Row>
            <AppTile to={links?.MESSAGES} icon={<AntDesign name='message1' />} title='MESSAGES' />
            <AppTile to={links?.CHECK_IN} icon={<AntDesign name='calendar' />} title='CHECK IN' />
          </Row>

          <Row>
            <AppTile to={links?.ANNOUNCEMENTS} icon={<Entypo name='megaphone' />} title='ANNOUNCEMENTS' />
            <AppTile to={links?.SERVICES} icon={<MaterialCommunityIcons name='tooth-outline' />} title='SERVICES' />
          </Row>

          <Row>
            <AppTile to={links?.FORMS} icon={<AntDesign name='form' />} title='FORMS' />
            <AppTile to={links?.ABOUT_US} icon={<AntDesign name='infocirlceo' />} title='ABOUT US' />
          </Row>

          <Row>
            <AppTile to={links?.PROFILE} icon={<AntDesign name='profile' />} title='PATIENT PROFILE' />
            <AppTile to={links?.REVIEW} icon={<AntDesign name='staro' />} title='REVIEW' />
          </Row>

          <Row>
            <AppTile to={links?.APPOINTMENTS} icon={<AntDesign name='calendar' />} title='APPOINTMENTS' />
            <AppTile to={links?.PAYMENT} icon={<AntDesign name='creditcard' />} title='MAKE PAYMENT' />
          </Row>
        </View>
      </View>
    </Screen>
  )
}

const Row = ({ children }: { children: ReactNode }) => {
  const tokens = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        gap: tokens.spacing_s,
      }}
    >
      {children}
    </View>
  )
}
