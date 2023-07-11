import { gql } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import { usePractice } from '../contexts/Practice'
import useQuery from '../hooks/useQuery'
import Icon from './Icon'
import Image from './Image'

const GET_PAGES = gql`
  query {
    pages {
      id
      name
      active
      tile
      icon
    }
  }
`

const HomeTiles = () => {
  const getPages = useQuery(GET_PAGES)
  const pages = getPages.data?.pages || []
  const practice = usePractice()

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginBottom: 15 }}>
        <Text style={{ marginBottom: 5 }}>{practice.slogan}</Text>
        <Image style={{ width: 50, height: 50 }} src={practice?.logo?.url} />
      </View>
      <View style={styles.tiles}>
        <Tile to='Messages' icon='antdesign:message1' title='MESSAGES' />
        <Tile to='CheckIn' icon='antdesign:calendar' title='CHECK IN' />
        <Tile to='ContactUs' icon='antdesign:phone' title='CONTACT US' />
        <Tile to='ServiceGroup' icon='antdesign:setting' title='SERVICES' />
        <Tile to='FormGroup' icon='antdesign:form' title='FORMS' />
        <Tile to='AboutUs' icon='antdesign:infocirlceo' title='ABOUT US' />
        <Tile to='ProfileGroup' icon='antdesign:profile' title='PATIENT PROFILE' />
        <Tile to='Review' icon='antdesign:staro' title='REVIEW' />
        <Tile to='Appointments' icon='antdesign:calendar' title='APPOINTMENTS' />
        <Tile to='Payment' icon='antdesign:creditcard' title='MAKE PAYMENT' />
      </View>
    </ScrollView>
  )
}

const Tile = props => {
  const nav = useNavigation()
  const branding = useBranding()

  return (
    <Pressable onPress={() => nav.navigate(props.to)} style={styles.tileOuter}>
      <View style={branding.homeTile.style}>
        <Icon val={props.icon} size={40} color='white' />
        <Text style={branding.homeTile.title.style}>{props.title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tileOuter: {
    width: '50%',
    padding: 5,
  },
  tiles: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'center',
  },
})

export default HomeTiles
