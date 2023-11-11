import { useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import Button from '../components/Button'
import DentalIcon from '../components/DentalIcon'
import Group from '../components/Group'
import H from '../components/H'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_SERVICE from '../queries/GET_SERVICE'

const PatientServiceScreen = ({ id, data: propData }) => {
  const nav = useNavigation()
  const { data: queryData } = useQuery(GET_SERVICE, { id })

  const service = propData || queryData?.service || {}

  return (
    <Screen>
      <Group $x>
        <DentalIcon identifier={service.icon} size={80} />
        <H>{service.name}</H>
      </Group>

      <ScrollView>
        <Text>{service.desc}</Text>
      </ScrollView>

      <View style={{ marginTop: 'auto' }}>
        <Button
          text='Schedule Appointment'
          onPress={() => {
            nav.navigate('Appointments', { screen: 'Request Appointment' })
          }}
        />
      </View>
    </Screen>
  )
}

export default PatientServiceScreen
