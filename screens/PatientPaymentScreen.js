import { Linking, Text } from 'react-native'
import Button from '../components/Button'
import Card from '../components/Card'
import Screen from '../components/Screen'
import useQuery from '../hooks/useQuery'
import GET_CURRENT_PRACTICE from '../queries/GET_CURRENT_PRACTICE'

const PatientPaymentScreen = () => {
  const getPractice = useQuery(GET_CURRENT_PRACTICE)
  const stripePaymentLink = getPractice.data?.currentPractice?.stripePaymentLink

  return (
    <Screen>
      <Card>
        {stripePaymentLink ? <Button text='Make Payment' onPress={() => Linking.openURL(stripePaymentLink)} /> : <Text>This office does not have a payment method set.</Text>}
      </Card>
    </Screen>
  )
}

export default PatientPaymentScreen
