import { ScrollView, Text, View } from 'react-native'
import { Form } from '../../gql/graphql'
import { Screen } from '../common/components/Screen'
import { usePractice } from '../common/hooks/usePractice'
import { useTheme } from '../common/hooks/useTheme'
import { SplashScreen } from './SplashScreen'

const PatientFormScreen = ({
  data,
  onSubmit,
  responses,
  onChangeResponses,
}: {
  data: Form
  onSubmit: () => void
  responses: {}
  onChangeResponses: (responses: {}) => void
}) => {
  const practice = usePractice()
  if (!practice.data) return <SplashScreen />

  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center' }}>
          <Text>{practice.data.name}</Text>
          <Text>{practice.data.slogan}</Text>
          <Text>{practice.data.email}</Text>
          <Text>{practice.data.phone}</Text>
          <Text
            style={{
              fontSize: tokens.font_size_l,
              fontWeight: tokens.weight_semi_heavy,
            }}
          >
            {data.name}
          </Text>
          <Text>{data.desc}</Text>
        </View>

        <View>
          {/* {fields?.map(field => (
            <FormField key={field.id} {...field} onChange={val => onChangeResponses({ ...responses, [field.id]: val })} value={responses[field.id]} />
          ))} */}
        </View>

        {/* <SolidButton text='Submit' onPress={() => onSubmit(responses)} /> */}
      </ScrollView>
    </Screen>
  )
}

export default PatientFormScreen
