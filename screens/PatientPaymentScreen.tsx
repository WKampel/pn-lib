import { Linking, Text, View } from 'react-native'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { usePractice } from '../common/hooks/usePractice.tx'
import { useTheme } from '../common/hooks/useTheme'

export const PatientPaymentScreen = () => {
  const practice = usePractice()
  const stripePaymentLink = practice.data?.stripePaymentLink

  const { tokens } = useTheme()

  return (
    <Screen>
      <View style={{ padding: tokens.spacing_s }}>
        {stripePaymentLink ? (
          <SolidButton text='Make Payment' onPress={() => Linking.openURL(stripePaymentLink)} />
        ) : (
          <Text>This office does not have a payment method set.</Text>
        )}
      </View>
    </Screen>
  )
}
