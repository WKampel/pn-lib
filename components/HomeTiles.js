import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useBranding } from '../contexts/Branding'
import { usePractice } from '../contexts/Practice'
import Icon from './Icon'
import ImageAutoHeight from './ImageAutoHeight'

const HomeTiles = () => {
  const practice = usePractice()

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginBottom: 15, gap: 10 }}>
        <ImageAutoHeight style={{ height: 100, borderRadius: 10 }} src={practice?.logo?.url} />
        <Text>{practice.slogan}</Text>
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
  const { colors } = useBranding('tile')

  return (
    <TouchableOpacity onPress={() => nav.navigate(props.to)} style={styles.tileOuter}>
      <View style={[styles.homeTile, { backgroundColor: colors.primary }]}>
        <Icon val={props.icon} size={40} color='white' />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
  homeTile: {
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    height: 100,
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
})

export default HomeTiles
