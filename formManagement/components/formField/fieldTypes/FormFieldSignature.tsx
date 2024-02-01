import { TextInput } from '../../../../common/components/TextInput'
import { useTheme } from '../../../../common/hooks/useTheme'

type FormFieldSignatureProps = {
  value: string
  onChange: (value: string) => void
  name: string
}

export const FormFieldSignature = ({ value, onChange, name }: FormFieldSignatureProps) => {
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
