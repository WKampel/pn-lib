import { ScrollView, Text, View } from 'react-native'
import { H } from '../common/components/H'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { usePractice } from '../common/hooks/usePractice'
import { useTheme } from '../common/hooks/useTheme'
import { OnChangeFieldValueFn } from '../formManagement/hooks/usePatientForm'
import { PatientFormFieldData } from '../formManagement/types/PatientFormFieldData'
import { PatientFormFieldRenderer } from '../patientManagement/components/patientForm/PatientFormFieldRenderer'

type PatientFormScreenProps = {
  formName: string
  formDesc: string
  fields: PatientFormFieldData[]
  onSubmit: () => void
  onChangeFieldValue: OnChangeFieldValueFn
}

export const PatientFormScreen = ({ formName, formDesc, fields, onSubmit, onChangeFieldValue }: PatientFormScreenProps) => {
  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: tokens.spacing_l, padding: tokens.spacing_s, paddingBottom: 400 }}>
        <Header formName={formName} formDesc={formDesc} />

        <View style={{ gap: tokens.spacing_l }}>
          {fields.map(field => (
            <PatientFormFieldRenderer field={field} />
          ))}
        </View>

        <SolidButton text='Submit' onPress={onSubmit} />
      </ScrollView>
    </Screen>
  )
}

const Header = ({ formName, formDesc }: { formName: string; formDesc: string }) => {
  const tokens = useTheme()
  const practice = usePractice()
  return (
    <View style={{ justifyContent: 'center', gap: tokens.spacing_s }}>
      <Text style={{ textAlign: 'center' }}>{practice.data?.name}</Text>
      <Text style={{ textAlign: 'center' }}>{practice.data?.slogan}</Text>
      <Text style={{ textAlign: 'center' }}>{practice.data?.email}</Text>
      <Text style={{ textAlign: 'center' }}>{practice.data?.phone}</Text>
      <H style={{ textAlign: 'center' }}>{formName}</H>
      <H size='s' style={{ textAlign: 'center' }}>
        {formDesc}
      </H>
    </View>
  )
}
