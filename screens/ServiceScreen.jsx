import { gql } from '@apollo/client'
import { Text, View } from 'react-native'
import Button from '../components/Button'
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
      <View style={styles.service}>
        <View style={styles.icon}>
          <Icon val={service.icon} size={80} />
        </View>
        <View>
          <Text style={styles.name}>{service?.name}</Text>
        </View>
      </View>
      <Text>{service?.desc}</Text>

      <View style={{ marginTop: 'auto' }}>
        <Button text='Schedule Appointment' linkTo='Appointments' />
      </View>
    </Screen>
  )
}

export default ServiceScreen
