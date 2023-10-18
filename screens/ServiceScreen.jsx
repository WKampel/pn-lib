import { gql } from '@apollo/client'
import { ScrollView, Text, View } from 'react-native'
import Button from '../components/Button'
import Group from '../components/Group'
import H from '../components/H'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'

const GET_SERVICE = gql`
  query ($id: Int) {
    service(id: $id) {
      id
      name
      desc
      icon
    }
  }
`

const ServiceScreen = ({ id, data: propData }) => {
  const { data: queryData } = useQuery(GET_SERVICE, { id })

  const service = propData || queryData?.service || {}

  return (
    <Screen>
      <Group $x>
        <Icon val={service.icon} size={80} />
        <H>{service.name}</H>
      </Group>

      <ScrollView>
        <Text>{service.desc}</Text>
      </ScrollView>

      <View style={{ marginTop: 'auto' }}>
        <Button text='Schedule Appointment' linkTo='Appointments' />
      </View>
    </Screen>
  )
}

export default ServiceScreen
