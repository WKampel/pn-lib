import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AppTile from '../components/AppTile'
import Card from '../components/Card'
import Group from '../components/Group'
import Image from '../components/Image'
import Screen from '../components/Screen'
import usePractice from '../hooks/usePractice'
import useStyles from '../hooks/useStyles'

const PatientHomeScreen = () => {
  const styles = useStyles(styleConfig)
  const practice = usePractice()
  const insets = useSafeAreaInsets()

  return (
    <Screen style={{ paddingBottom: insets.bottom }}>
      <Card style={{ flexGrow: 1 }}>
        <Group spacing='xs' style={{ alignItems: 'center', marginBottom: 10 }}>
          <Image style={styles.logo} source={practice?.logo?.url} />
          <Text style={styles.slogan}>{practice.slogan}</Text>
        </Group>

        <View style={styles.tiles}>
          <Row>
            <AppTile to='Messages' icon={<AntDesign name='message1' />} title='MESSAGES' />
            <AppTile to='CheckIn' icon={<AntDesign name='calendar' />} title='CHECK IN' />
          </Row>

          <Row>
            <AppTile to='ContactUs' icon={<AntDesign name='phone' />} title='CONTACT US' />
            <AppTile to='Services' icon={<MaterialCommunityIcons name='tooth-outline' />} title='SERVICES' />
          </Row>

          <Row>
            <AppTile to='Forms' icon={<AntDesign name='form' />} title='FORMS' />
            <AppTile to='AboutUs' icon={<AntDesign name='infocirlceo' />} title='ABOUT US' />
          </Row>

          <Row>
            <AppTile to='Profile' icon={<AntDesign name='profile' />} title='PATIENT PROFILE' />
            <AppTile to='Review' icon={<AntDesign name='staro' />} title='REVIEW' />
          </Row>

          <Row>
            <AppTile to='Appointments' icon={<AntDesign name='calendar' />} title='APPOINTMENTS' />
            <AppTile to='Payment' icon={<AntDesign name='creditcard' />} title='MAKE PAYMENT' />
          </Row>
        </View>
      </Card>
    </Screen>
  )
}

const Row = ({ children }) => {
  const styles = useStyles(styleConfig)
  return <View style={styles.row}>{children}</View>
}

const styleConfig = {
  base: {
    logo: {
      width: 100,
      height: 100,
      borderRadius: '$radius-m',
    },
    tiles: {
      flex: 1,
      gap: '$spacing-s',
    },
    slogan: {
      textAlign: 'center',
      fontSize: '$font-size-s',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      gap: '$spacing-s',
    },
  },
}

export default PatientHomeScreen
