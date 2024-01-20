import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'
import { ScrollView } from 'react-native'
import { useAuthToken } from '../../../common/hooks/useAuthToken'
import { useCurrentRoute } from '../../hooks/useCurrentRoute'
import { PracticeDrawerItemType } from '../../types/PracticeDrawerItemType'
import { PracticeDrawerGroup } from './PracticeDrawerGroup'
import { PracticeDrawerHeader } from './PracticeDrawerHeader'
import { PracticeDrawerItem } from './PracticeDrawerItem'

export const PracticeDrawerContent = ({ switchPractice, items = [] }: { switchPractice: () => void; items: PracticeDrawerItemType[] }) => {
  const currentRoute = useCurrentRoute()

  const nav = useNavigation()
  const { setToken } = useAuthToken()

  const generateChildren = (items: PracticeDrawerItemType[], level = 0) => {
    return items.map((item, i) => {
      if (item.type === 'group') {
        return (
          <PracticeDrawerGroup key={i} items={item.items} currentRouteName={currentRoute?.name} label={item.label}>
            {generateChildren(item.items, level + 1)}
          </PracticeDrawerGroup>
        )
      } else if (item.type === 'item') {
        return <PracticeDrawerItem key={i} icon={item.icon} label={item.label} onPress={item.onPress} color={item.color} isFocused={item.active} />
      }
    })
  }

  // Switch practice item
  const switchPracticeItem: PracticeDrawerItemType = {
    label: 'Switch Practice',
    onPress: switchPractice,
    icon: <AntDesign name='back' />,
    color: 'rgb(175,175,175)',
    active: false,
  }

  // Sign out item
  const signOutItem: PracticeDrawerItemType = {
    label: 'Sign Out',
    onPress: () => setToken(null),
    icon: <Feather name='log-out' />,
    color: 'rgb(175,175,175)',
    active: false,
  }

  // Children
  const children = useMemo(() => {
    return generateChildren([...items, switchPracticeItem, signOutItem])
  }, [items, switchPracticeItem, signOutItem])

  return (
    <>
      <PracticeDrawerHeader />
      <ScrollView style={{ borderRightWidth: 1, borderColor: 'rgb(230,230,230)' }} contentContainerStyle={{ gap: 10, padding: 10 }}>
        {children}
      </ScrollView>
    </>
  )
}
