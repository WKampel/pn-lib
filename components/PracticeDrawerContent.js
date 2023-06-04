import { AntDesign } from '@expo/vector-icons'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import Image from '../components/Image'
import { useBranding } from '../contexts/Branding'
import { useMe } from '../contexts/Me'
import { usePractice } from '../contexts/Practice'

const PracticeDrawerContent = props => {
  const branding = useBranding()
  const practice = usePractice()
  const me = useMe()
  const nav = useNavigation()

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0, height: '100%' }}>
      <View style={branding.sideNav.header.style}>
        <View style={styles.nameLogoContainer}>
          <Image style={branding.sideNav.header.logo.style} src={practice?.logo?.url} />
          <View>
            <Text style={branding.sideNav.header.practiceName.style}>{practice?.name}</Text>
            <Text style={branding.sideNav.header.practiceSlogan.style}>{practice?.slogan}</Text>
            <Text style={branding.sideNav.header.userName.style}>
              <AntDesign style={styles.arrow} name='user' size={12} color='white' /> {me?.userDetails?.fullName || ''}
            </Text>
          </View>
        </View>
      </View>

      {props.hideDefaultItems ? null : <DrawerItemList {...props} />}

      {props.customItems?.map((item, i) => {
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
            // style={{ marginBottom: 0, marginTop: 0 }}
            focused={item.isFocused && item.isFocused(props.state.routes[props.state.index])}
            style={{ paddingLeft: 25, margin: 0 }}
            inactiveTintColor='gray'
          />
        )
      })}
      {props.extraChildren}
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  nameLogoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
})

export default PracticeDrawerContent
