import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { Context as StyleContext } from '../../contexts/style'
import { gql } from '@apollo/client'
import useQuery from '../../libs/useQuery'

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

export default () => {
  const getPages = useQuery(GET_PAGES)
  const pages = getPages.data?.pages

  return (
    <ScrollView>
      <View style={styles.tiles}>
        <Tile screen='Messages' icon={<AntDesign name='message1' size={40} color='white' />} title='MESSAGES' />
        <Tile screen='CheckIn' icon={<AntDesign name='calendar' size={40} color='white' />} title='CHECK IN' />
        <Tile screen='ContactUs' icon={<AntDesign name='phone' size={40} color='white' />} title='CONTACT US' />
        <Tile screen='ServiceGroup' icon={<AntDesign name='setting' size={40} color='white' />} title='SERVICES' />
        <Tile screen='FormGroup' icon={<AntDesign name='form' size={40} color='white' />} title='FORMS' />
        <Tile screen='AboutUs' icon={<AntDesign name='infocirlceo' size={40} color='white' />} title='ABOUT US' />
        <Tile screen='ProfileGroup' icon={<AntDesign name='profile' size={40} color='white' />} title='PATIENT PROFILE' />
        <Tile screen='Review' icon={<AntDesign name='staro' size={40} color='white' />} title='REVIEW' />
        <Tile screen='Appointments' icon={<AntDesign name='calendar' size={40} color='white' />} title='APPOINTMENTS' />
        <Tile icon={<AntDesign name='creditcard' size={40} color='white' />} title='MAKE PAYMENT' />
        {pages
          ?.filter(page => page.tile)
          .filter(page => page.name !== 'About Us')
          ?.map(page => (
            <Tile icon={<AntDesign name={page.icon} size={40} color='white' />} title={page.name} screen={page.name} />
          ))}
      </View>
    </ScrollView>
  )
}

const Tile = props => {
  const nav = useNavigation()
  const style = useContext(StyleContext)
  return (
    <Pressable onPress={() => nav.navigate(props.screen)} style={styles.tileOuter}>
      <View style={[styles.tile, { backgroundColor: style.primaryColor }]}>
        {props.icon}
        <Text style={styles.tileTitle}>{props.title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tileOuter: {
    width: '50%',
    padding: 5,
  },
  tile: {
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    height: 100,
    overflow: 'hidden',
  },
  tileTitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  tiles: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'center',
  },
})
