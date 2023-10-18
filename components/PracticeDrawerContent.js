import { AntDesign, Feather } from '@expo/vector-icons'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Image from '../components/Image'
import { useAuthToken } from '../contexts/AuthToken'
import { useBranding } from '../contexts/Branding'
import { useMe } from '../contexts/Me'
import { usePractice } from '../contexts/Practice'
import useState from '../hooks/useState'
import Icon from './Icon'

const isRouteNameInGroup = (groupScreens, activeRouteName) => {
  for (let screen of groupScreens) {
    if (screen.name === activeRouteName) {
      return true
    }
    if (screen.screens && isRouteNameInGroup(screen.screens, activeRouteName)) {
      return true
    }
  }
  return false
}

const GroupContainer = ({ children, label, activeRouteName, screens }) => {
  const open = useState(false)

  useEffect(() => {
    if (!isRouteNameInGroup(screens, activeRouteName)) {
      open.set(false)
    }
  }, [activeRouteName])

  useEffect(() => {
    if (isRouteNameInGroup(screens, activeRouteName)) {
      open.set(true)
    }
  }, [])

  return (
    <View style={[styles.groupContainer, open.val && styles.groupContainerOpen]}>
      <TouchableOpacity focusable={false} onPress={() => open.set(!open.val)} style={styles.groupNameContainer}>
        <Text style={styles.groupNameText}>{label}</Text>
        <Icon set='ionicons' name={open.val ? 'chevron-down' : 'chevron-up'} size={20} />
      </TouchableOpacity>
      {children}
    </View>
  )
}

const PracticeDrawerContent = props => {
  const activeRoute = props.state.routes[props.state.index]
  const activeRouteName = activeRoute?.name

  const { colors } = useBranding('sideNav')
  const practice = usePractice()
  const me = useMe()
  const nav = useNavigation()
  const { setToken } = useAuthToken()

  const transform = (screens, level = 0) => {
    return screens.map((screen, i) => {
      if (screen.screens) {
        // If it has nested screens, it's a group
        return (
          <GroupContainer screens={screen.screens} activeRouteName={activeRouteName} label={screen.name}>
            {transform(screen.screens, level + 1)}
          </GroupContainer>
        )
      } else {
        // It's an individual screen
        const onPress = () => {
          if (screen.onPress) screen.onPress()
          if (screen.linkTo) nav.navigate(screen.linkTo)
          if (screen.name) nav.navigate(screen.name)
        }

        if (screen.hideNavLink) return undefined

        return (
          <DrawerItem
            style={{ color: screen.color }}
            key={i}
            icon={screen.icon}
            title={screen.title}
            onPress={onPress}
            focused={screen.isFocused ? screen.isFocused(activeRoute) : activeRouteName === screen.name}
          />
        )
      }
    })
  }

  let transformed = transform(
    props.screens.concat([
      ...(props.customItems ? props.customItems : []),
      ...(props.switchPractice
        ? [
            {
              title: 'Switch Practice',
              onPress: props.switchPractice,
              icon: <AntDesign name='back' size={18} color='rgb(150, 150, 150)' />,
              color: 'rgb(150,150,150)',
            },
          ]
        : []),
      {
        title: 'Sign Out',
        onPress: () => setToken(null),
        icon: <Feather name='log-out' size={18} color='rgb(150, 150, 150)' />,
        color: 'rgb(150,150,150)',
      },
    ])
  )

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0, height: '100%' }}>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <View style={styles.nameLogoContainer}>
          <Image style={{ width: 50, height: 50 }} src={practice?.logo?.url} />
          <View style={{ flex: 1 }}>
            <Text style={styles.practiceName}>{practice?.name}</Text>
            <Text style={styles.practiceSlogan}>{practice?.slogan}</Text>
            <Text style={styles.userName}>
              <AntDesign style={styles.arrow} name='user' size={12} color='white' /> {me?.fullName || ''}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ gap: 10, padding: 10 }}>{transformed}</ScrollView>
    </DrawerContentScrollView>
  )
}

const DrawerItem = ({ icon, title, onPress, focused, style }) => {
  const { colors } = useBranding()

  return (
    <TouchableOpacity focusable={false} onPress={onPress} style={styles.drawerItem}>
      {icon}
      <Text style={[style, focused && { color: colors.primary }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  nameLogoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
  },
  header: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 25,
    marginBottom: 10,
  },
  practiceName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  practiceSlogan: {
    color: 'rgb(220, 220, 220)',
    fontSize: 14,
  },
  userName: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 12,
    borderRadius: 15,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 15,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  groupContainer: {
    backgroundColor: 'rgb(240,243,245)',
    borderRadius: 10,
    paddingLeft: 15,
    height: 40,
    overflow: 'hidden',
  },

  groupContainerOpen: {
    height: 'auto',
  },
  groupNameContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  groupNameText: {
    fontWeight: 'bold',
  },
  drawerItem: {
    flexDirection: 'row',
    marginLeft: 15,
    height: 40,
    alignItems: 'center',
    gap: 15,
  },
})

export default PracticeDrawerContent
