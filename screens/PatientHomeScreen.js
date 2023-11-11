import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { ScrollView, Text, View } from 'react-native'
import AppTile from '../components/AppTile'
import Group from '../components/Group'
import Image from '../components/Image'
import Screen from '../components/Screen'
import usePractice from '../hooks/usePractice'
import useStyles from '../hooks/useStyles'

const PatientHomeScreen = () => {
  const styles = useStyles(styleConfig)
  const practice = usePractice()

  return (
    <Screen>
      <ScrollView>
        <Group style={{ alignItems: 'center', marginBottom: 15 }}>
          <Image style={styles.logo} source={practice?.logo?.url} />
          <Text>{practice.slogan}</Text>
        </Group>

        <View style={styles.tiles}>
          <AppTile to='Messages' icon={<AntDesign name='message1' />} title='MESSAGES' />
          <AppTile to='CheckIn' icon={<AntDesign name='calendar' />} title='CHECK IN' />
          <AppTile to='ContactUs' icon={<AntDesign name='phone' />} title='CONTACT US' />
          <AppTile to='ServiceGroup' icon={<MaterialCommunityIcons name='tooth-outline' />} title='SERVICES' />
          <AppTile to='FormGroup' icon={<AntDesign name='form' />} title='FORMS' />
          <AppTile to='AboutUs' icon={<AntDesign name='infocirlceo' />} title='ABOUT US' />
          <AppTile to='ProfileGroup' icon={<AntDesign name='profile' />} title='PATIENT PROFILE' />
          <AppTile to='Review' icon={<AntDesign name='staro' />} title='REVIEW' />
          <AppTile to='Appointments' icon={<AntDesign name='calendar' />} title='APPOINTMENTS' />
          <AppTile to='Payment' icon={<AntDesign name='creditcard' />} title='MAKE PAYMENT' />
        </View>
      </ScrollView>
    </Screen>
  )
}

const styleConfig = {
  base: {
    logo: {
      width: 100,
      height: 100,
      borderRadius: '$radius-m',
    },
    tiles: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      textAlign: 'center',
    },
  },
}

export default PatientHomeScreen
