import { AntDesign, Entypo } from '@expo/vector-icons'
import { GetActiveCustomPagesQuery, GetActiveCustomPagesQueryVariables } from '../../../gql/graphql'
import { PracticeDrawer } from '../../core/components/PracticeDrawer/PracticeDrawer'
import { useCurrentRoute } from '../../core/hooks/useCurrentRoute'
import { PracticeDrawerItemType } from '../../core/types/PracticeDrawerItemType'
import { GetActiveCustomPages } from '../../queries/GetActiveCustomPagesQuery'
import { usePracticeQuery } from '../hooks/usePracticeQuery'

type PatientPracticeDrawerProps = {
  onPressCustomPageItem: (id: string) => void
  isCustomPageItemActive: (id: string) => boolean
  onPressAboutUs: () => void
  onPressContactUs: () => void
  onPressFaqs: () => void
  onPressSmileAlbums: () => void
  children: React.ReactNode
  switchPractice: () => void
}

export const PatientPracticeDrawer = (props: PatientPracticeDrawerProps) => {
  const { data } = usePracticeQuery<GetActiveCustomPagesQuery, GetActiveCustomPagesQueryVariables>(GetActiveCustomPages, { variables: {} })

  const activePages = data?.activeCustomPages || []

  const currentRoute = useCurrentRoute()
  const currentRouteName = currentRoute?.name

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
  return (
    <PracticeDrawer switchPractice={props.switchPractice} items={items}>
      {props.children}
    </PracticeDrawer>
  )
}
