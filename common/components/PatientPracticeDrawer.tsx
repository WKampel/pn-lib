import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { GetActiveCustomPagesQuery, GetActiveCustomPagesQueryVariables } from '../../../gql/graphql'
import { PracticeDrawer } from '../../core/components/PracticeDrawer/PracticeDrawer'
import { useCurrentRoute } from '../../core/hooks/useCurrentRoute'
import { PracticeDrawerItemType } from '../../core/types/PracticeDrawerItemType'
import { GetActiveCustomPages } from '../../queries/GetActiveCustomPagesQuery'
import { usePracticeQuery } from '../hooks/usePracticeQuery'
import { useTheme } from '../hooks/useTheme'

type PatientPracticeDrawerProps = {
  onPressCustomPageItem: (id: string) => void
  isCustomPageItemActive: (id: string) => boolean
  onPressAboutUs: () => void
  onPressContactUs: () => void
  onPressFaqs: () => void
  onPressSmileAlbums: () => void
  children: React.ReactNode
  switchPractice: () => void
  firstName: string
  lastName: string
  onPressProfile: () => void
  onPressSettings: () => void
}

export const PatientPracticeDrawer = (props: PatientPracticeDrawerProps) => {
  const { data } = usePracticeQuery<GetActiveCustomPagesQuery, GetActiveCustomPagesQueryVariables>(GetActiveCustomPages, { variables: {} })

  const activePages = data?.activeCustomPages || []

  const currentRoute = useCurrentRoute()
  const currentRouteName = currentRoute?.name

  const { tokens } = useTheme()

  const customPageItems: PracticeDrawerItemType[] = activePages.map(page => ({
    type: 'item',
    label: page.name,
    icon: <Entypo name='circle' />,
    active: props.isCustomPageItemActive(page.id),
    onPress: () => props.onPressCustomPageItem(page.id),
  }))

  const items: PracticeDrawerItemType[] = [
    {
      type: 'item',
      label: 'About Us',
      icon: <AntDesign name='infocirlceo' />,
      active: currentRouteName === 'AboutUs',
      onPress: props.onPressAboutUs,
    },
    {
      type: 'item',
      label: 'Contact Us',
      icon: <AntDesign name='phone' />,
      active: currentRouteName === 'ContactUs',
      onPress: props.onPressContactUs,
    },
    {
      type: 'item',
      label: 'Faqs',
      icon: <AntDesign name='questioncircleo' />,
      active: currentRouteName === 'Faqs',
      onPress: props.onPressFaqs,
    },
    {
      type: 'item',
      label: 'Smile Albums',
      icon: <AntDesign name='smileo' />,
      active: currentRouteName === 'SmileAlbums',
      onPress: props.onPressSmileAlbums,
    },
    ...customPageItems,
  ]

  const bottom = (
    <View style={{ margin: tokens.spacing_s }}>
      <TouchableOpacity
        onPress={props.onPressSettings}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: tokens.spacing_s,
          backgroundColor: 'rgb(245,245,245)',
          height: tokens.size_m,
          borderRadius: tokens.radius_round,
        }}
      >
        <Feather name='settings' color='#739ec9' size={18} />
        <Text style={{ color: '#739ec9', fontSize: 14 }}>My Dentist Settings</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <PracticeDrawer
      bottom={bottom}
      firstName={props.firstName}
      lastName={props.lastName}
      onPressProfile={props.onPressProfile}
      switchPractice={props.switchPractice}
      items={items}
    >
      {props.children}
    </PracticeDrawer>
  )
}
