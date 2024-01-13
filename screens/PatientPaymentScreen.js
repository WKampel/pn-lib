import { Linking, Text } from 'react-native'
import Button from '../components/Button'
import Card from '../components/Card'
import Screen from '../components/Screen'
import usePractice from '../hooks/usePractice'

const PatientPaymentScreen = () => {
  const practice = usePractice()
  const stripePaymentLink = practice?.stripePaymentLink

  return (
    <Screen>
      <Card>
        {stripePaymentLink ? <Button text='Make Payment' onPress={() => Linking.openURL(stripePaymentLink)} /> : <Text>This office does not have a payment method set.</Text>}
      </Card>
    </Screen>
  )
}

export default PatientPaymentScreen
