import { AntDesign, Feather } from '@expo/vector-icons'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Image from '../components/Image'
import { useAuthToken } from '../contexts/AuthToken'
import { useBranding } from '../contexts/Branding'
import { useMe } from '../contexts/Me'
import { usePractice } from '../contexts/Practice'

const PracticeDrawerContent = props => {
  const { colors } = useBranding('sideNav')
  const practice = usePractice()
  const me = useMe()
  const nav = useNavigation()
  const { setToken } = useAuthToken()

  const customItems = [
    ...(props.customItems ? props.customItems : []),
    ...(props.switchPractice
      ? [
          {
            label: 'Switch Practice',
            onPress: props.switchPractice,
            icon: <AntDesign name='back' size={18} color='rgb(150, 150, 150)' />,
            color: 'rgb(150,150,150)',
          },
        ]
      : []),
    {
      label: 'Sign Out',
      onPress: () => setToken(null),
      icon: <Feather name='log-out' size={18} color='rgb(150, 150, 150)' />,
      color: 'rgb(150,150,150)',
    },
  ]

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0, height: '100%' }}>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <View style={styles.nameLogoContainer}>
          <Image style={styles.logo} src={practice?.logo?.url} />
          <View style={{ flex: 1 }}>
            <Text style={styles.practiceName}>{practice?.name}</Text>
            <Text style={styles.practiceSlogan}>{practice?.slogan}</Text>
            <Text style={styles.userName}>
              <AntDesign style={styles.arrow} name='user' size={12} color='white' /> {me?.fullName || ''}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <DrawerItemList {...props} />

        {customItems?.map((item, i) => {
          const onPress = () => {
            if (item.onPress) item.onPress()
            if (item.linkTo) nav.navigate(item.linkTo)
          }

          return (
            <DrawerItem
              icon={() => item.icon}
              key={i}
              label={item.label}
              onPress={onPress}
              labelStyle={{ fontSize: 14 }}
              focused={item.isFocused && item.isFocused(props.state.routes[props.state.index])}
              style={{ paddingLeft: 25, margin: 0 }}
              inactiveTintColor={item.color || 'rgb(85,85,85)'}
            />
          )
        })}
        {props.extraChildren}
      </ScrollView>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  nameLogoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
})

export default PracticeDrawerContent
