import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import Card from '../components/Card'
import DentalIcon from '../components/DentalIcon'
import Group from '../components/Group'
import H from '../components/H'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_SERVICE from '../queries/GetServiceQuery'

const PatientServiceScreen = ({ id, data: propData }) => {
  const nav = useNavigation()
  const { data: queryData } = useQuery(GET_SERVICE, { variables: { id } })

  const service = propData || queryData?.service || {}

  return (
    <Screen>
      <Card style={{ flexGrow: 1 }} scroll>
        <Group x>
          <DentalIcon identifier={service.icon} size={80} />
          <H>{service.name}</H>
        </Group>

        <Text>{service.desc}</Text>

        <View style={{ marginTop: 'auto' }}>
          <Button
            text='Schedule Appointment'
            onPress={() => {
              nav.navigate('RequestAppointment')
            }}
          />
        </View>
      </Card>
    </Screen>
  )
}

export default PatientServiceScreen
