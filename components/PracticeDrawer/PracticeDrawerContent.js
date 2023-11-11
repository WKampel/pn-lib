import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'
import { ScrollView } from 'react-native'
import useAuthToken from '../../hooks/useAuthToken'
import useCurrentRoute from '../../hooks/useCurrentRoute'
import PracticeDrawerGroup from './PracticeDrawerGroup'
import PracticeDrawerHeader from './PracticeDrawerHeader'
import PracticeDrawerItem from './PracticeDrawerItem'

const PracticeDrawerContent = ({ switchPractice, items = [] }) => {
  const currentRoute = useCurrentRoute()

  const nav = useNavigation()
  const { setToken } = useAuthToken()

  const generateChildren = (items, level = 0) => {
    return items.map((item, i) => {
      if (item.items) {
        return (
          <PracticeDrawerGroup key={i} items={item.items} currentRouteName={currentRoute?.name} label={item.label}>
            {generateChildren(item.items, level + 1)}
          </PracticeDrawerGroup>
        )
      } else {
        const onPress = () => {
          if (item.onPress) item.onPress()
          if (item.to) nav.navigate(item.to)
        }

        const isFocused = item.to === currentRoute?.name || item.owns?.includes(currentRoute?.name)

        return <PracticeDrawerItem key={i} icon={item.icon} label={item.label} onPress={onPress} style={{ color: item.color }} isFocused={isFocused} />
      }
    })
  }

  // Switch practice item
  const switchPracticeItem = {
    label: 'Switch Practice',
    onPress: switchPractice,
    icon: <AntDesign name='back' size={18} color='rgb(150, 150, 150)' />,
  }

  // Sign out item
  const signOutItem = {
    label: 'Sign Out',
    onPress: () => setToken(null),
    icon: <Feather name='log-out' size={18} color='rgb(150, 150, 150)' />,
  }

  // Children
  const children = useMemo(() => {
    return generateChildren([...items, switchPracticeItem, signOutItem])
  })

  return (
    <>
      <PracticeDrawerHeader />
      <ScrollView style={{ borderRightWidth: 1, borderColor: 'rgb(230,230,230)' }} contentContainerStyle={{ gap: 10, padding: 10 }}>
        {children}
      </ScrollView>
    </>
  )
}

export default PracticeDrawerContent
