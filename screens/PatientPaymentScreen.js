import { Linking, Text } from 'react-native'
import Button from '../components/Button'
import Screen from '../components/Screen'
import usePractice from '../hooks/usePractice'

const PatientPaymentScreen = () => {
  const { stripePaymentLink } = usePractice()

  return (
    <Screen>
      {stripePaymentLink ? (
        <Button text='Make Payment' onPress={() => Linking.openURL(stripePaymentLink)} />
      ) : (
        <Text>This office does not have a payment method set.</Text>
      )}
    </Screen>
  )
}

export default PatientPaymentScreen
