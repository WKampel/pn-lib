import React, { useContext } from 'react'
import { Platform, StyleSheet, View, Text, Image } from 'react-native'
import { Context as MeContext } from '../../../src/contexts/Me'
import { Context as PracticeContext } from '../../../src/contexts/Practice'
import { Context as StyleContext } from '../../contexts/style'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Link from '../link'
import { Feather } from '@expo/vector-icons'
import OnboardingProgress from '../../../src/components/OnboardingProgress'

export default props => {
  const me = useContext(MeContext)
  const practice = useContext(PracticeContext)
  const style = useContext(StyleContext)

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0, height: '100%' }}>
      <View style={[styles.practiceHeader, { backgroundColor: style.primaryColor }]}>
        <View style={styles.nameLogoContainer}>
          <Image style={styles.logo} source={{ uri: practice?.logo?.url }} />
          <View>
            <Text style={styles.practiceName}>{practice?.name}</Text>
            <Text style={styles.practiceSlogan}>{practice?.slogan}</Text>
          </View>
        </View>
        {me?.id ? (
          <Link to={`/${practice?.url}/admins/${me?.id}`} style={styles.userName}>
            {me?.userDetails?.fullName}
          </Link>
        ) : null}
      </View>
      <DrawerItemList {...props} />
      {props.token ? (
        <DrawerItem
          inactiveTintColor='rgb(150, 150, 150)'
          label='Sign Out'
          onPress={props.signOut}
          icon={() => <Feather name='log-out' size={18} color='rgb(150, 150, 150)' />}
          labelStyle={{ fontSize: 14 }}
          style={{ marginBottom: 0, marginTop: 0 }}
        />
      ) : null}
      {props.token ? <OnboardingProgress style={{ marginTop: 'auto' }} /> : null}
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  practiceHeader: {
    color: 'white',
    fontSize: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40,
    marginBottom: 10,
  },
  nameLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  practiceName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  practiceSlogan: {
    color: 'rgb(240,240,240)',
    fontSize: 16,
  },
  userName: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  signOutButton: {
    fontSize: 10,
    paddingLeft: 0,
    marginTop: 'auto',
  },
})
