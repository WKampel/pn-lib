import { gql } from '@apollo/client'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import useQuery from '../hooks/useQuery'

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

  return (
    <ScrollView>
      <View style={styles.tiles}>
        <Tile to='Messages' icon='message1' title='MESSAGES' />
        <Tile to='CheckIn' icon='calendar' title='CHECK IN' />
        <Tile to='ContactUs' icon='phone' title='CONTACT US' />
        <Tile to='ServiceGroup' icon='setting' title='SERVICES' />
        <Tile to='FormGroup' icon='form' title='FORMS' />
        <Tile to='AboutUs' icon='infocirlceo' title='ABOUT US' />
        <Tile to='ProfileGroup' icon='profile' title='PATIENT PROFILE' />
        <Tile to='Review' icon='staro' title='REVIEW' />
        <Tile to='Appointments' icon='calendar' title='APPOINTMENTS' />
        <Tile to='Payment' icon='creditcard' title='MAKE PAYMENT' />
        {pages
          .filter(page => page.tile)
          .filter(page => page.name !== 'About Us')
          .map(page => (
            <Tile key={page.name} icon={page.icon} title={page.name} to={{ name: 'Page', params: { name: page.name } }} />
          ))}
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
        <AntDesign name={props.icon} size={40} color='white' />
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
