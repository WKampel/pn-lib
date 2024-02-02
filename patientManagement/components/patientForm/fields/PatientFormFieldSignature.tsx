import { TextInput } from '../../../../common/components/TextInput'
import { useTheme } from '../../../../common/hooks/useTheme'
import { ExtractPatientFormFieldProps } from '../PatientFormFieldRenderer'

export const PatientFormFieldSignature = ({ value, onChange, name }: ExtractPatientFormFieldProps<'SIGNATURE'>) => {
  const tokens = useTheme()
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label={name}
      style={{
        fontSize: tokens.font_size_xl,
        backgroundColor: tokens.color_bg_surface_alt,
        fontFamily: 'Allura-Regular',
      }}
    />
  )
}
