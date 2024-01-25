import { ScrollView, Text, View } from 'react-native'
import { H } from '../common/components/H'
import { Screen } from '../common/components/Screen'
import { SolidButton } from '../common/components/buttons/SolidButton'
import { usePractice } from '../common/hooks/usePractice'
import { useTheme } from '../common/hooks/useTheme'
import { assertUnreachable } from '../core/utils/assertUnreachable'
import { FormFieldDate } from '../formManagement/components/formField/fieldTypes/FormFieldDate'
import { FormFieldLongText } from '../formManagement/components/formField/fieldTypes/FormFieldLongText'
import { FormFieldRadio } from '../formManagement/components/formField/fieldTypes/FormFieldRadio'
import { FormFieldSelect } from '../formManagement/components/formField/fieldTypes/FormFieldSelect'
import { FormFieldSignature } from '../formManagement/components/formField/fieldTypes/FormFieldSignature'
import { FormFieldTextArea } from '../formManagement/components/formField/fieldTypes/FormFieldTextArea'
import { FormFieldTextInput } from '../formManagement/components/formField/fieldTypes/FormFieldTextInput'
import { FormFieldTime } from '../formManagement/components/formField/fieldTypes/FormFieldTime'
import { FormFieldTitle } from '../formManagement/components/formField/fieldTypes/FormFieldTitle'
import { FormFieldYesNo } from '../formManagement/components/formField/fieldTypes/FormFieldYesNo'
import { OnChangeFieldValueFn } from '../formManagement/hooks/usePatientForm'
import { PatientFormFieldData } from '../formManagement/types/PatientFormFieldData'

type PatientFormScreenProps = {
  formName: string
  formDesc: string
  fields: PatientFormFieldData[]
  onSubmit: () => void
  onChangeFieldValue: OnChangeFieldValueFn
}

export const PatientFormScreen = ({ formName, formDesc, fields, onSubmit, onChangeFieldValue }: PatientFormScreenProps) => {
  const practice = usePractice()

  const tokens = useTheme()

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ gap: tokens.spacing_l, padding: tokens.spacing_s }}>
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

        <View style={{ gap: tokens.spacing_l }}>
          {fields.map(field => {
            switch (field.type) {
              case 'TITLE':
                return <FormFieldTitle name={field.name} />
              case 'TEXT_INPUT':
                return <FormFieldTextInput name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} />
              case 'DATE':
                return <FormFieldDate name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} />
              case 'TIME':
                return <FormFieldTime name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} />
              case 'YES_NO':
                return <FormFieldYesNo name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} />
              case 'RADIO':
                return <FormFieldRadio name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} options={field.options} />
              case 'DROPDOWN':
                return <FormFieldSelect name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} options={field.options} />
              case 'LONG_TEXT':
                return <FormFieldLongText name={field.name} />
              case 'SIGNATURE':
                return <FormFieldSignature name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} />
              case 'TEXT_AREA':
                return <FormFieldTextArea name={field.name} value={field.value} onChange={val => onChangeFieldValue(field, val)} />
              default:
                assertUnreachable(field)
            }
          })}
        </View>

        <SolidButton text='Submit' onPress={onSubmit} />
      </ScrollView>
    </Screen>
  )
}
