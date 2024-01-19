import { Linking, Text } from 'react-native'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { usePractice } from '../common/hooks/usePractice'

export const PatientPaymentScreen = () => {
  const practice = usePractice()
  const stripePaymentLink = practice.data?.stripePaymentLink

  return (
    <Screen>
      {stripePaymentLink ? (
        <SolidButton text='Make Payment' onPress={() => Linking.openURL(stripePaymentLink)} />
      ) : (
        <Text>This office does not have a payment method set.</Text>
      )}
    </Screen>
  )
}
