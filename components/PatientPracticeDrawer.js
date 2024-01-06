import { AntDesign, Entypo } from '@expo/vector-icons'
import { usePracticeQuery } from '../hooks/usePracticeQuery'
import GET_ACTIVE_CUSTOM_PAGES from '../queries/GET_ACTIVE_CUSTOM_PAGES'
import PracticeDrawer from './PracticeDrawer'

const PatientPracticeDrawer = props => {
  const { data } = usePracticeQuery(GET_ACTIVE_CUSTOM_PAGES)

  const activePages = data?.activeCustomPages || []

  const pageItems = activePages.map(page => ({
    label: page.name,
    to: { name: 'CustomPage', params: { id: page.id } },
    icon: <Entypo name='circle' />,
    getIsFocused: currentRoute => currentRoute?.name === 'CustomPage' && currentRoute?.params?.id === page.id,
  }))

  const items = [
    {
      label: 'About Us',
      to: 'AboutUs',
      icon: <AntDesign name='infocirlceo' />,
    },
    {
      label: 'Contact Us',
      to: 'ContactUs',
      icon: <AntDesign name='phone' />,
    },
    {
      label: 'Faqs',
      to: 'Faqs',
      icon: <AntDesign name='questioncircleo' />,
    },
    {
      label: 'Smile Albums',
      to: 'SmileAlbums',
      icon: <AntDesign name='smileo' />,
    },
    ...pageItems,
  ]
  return <PracticeDrawer items={items} {...props} />
}

export default PatientPracticeDrawer
