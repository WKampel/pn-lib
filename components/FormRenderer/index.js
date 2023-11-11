import Group from '../Group'
import FormRendererField from './FormRendererField'
import FormRendererRow from './FormRendererRow'

const FormRenderer = ({ config }) => {
  const fields = config.fields
  const values = config.values
  const onChange = config.onChange
  const configLayout = config.layout

  // Create a default layout if none provided, otherwise filter out rows that have fields not included in the fields config
  const layout = configLayout
    ? configLayout.filter(row => row.some(fieldName => fields.some(f => f.name === fieldName)))
    : fields.map(field => [field.name])

  return (
    <Group>
      {layout.map((row, rowIndex) => (
        <FormRendererRow key={rowIndex}>
          {row
            .map(fieldName => {
              const fieldConfig = fields.find(f => f.name === fieldName)
              // Render the field only if fieldConfig is found
              return (
                fieldConfig && <FormRendererField key={fieldName} config={fieldConfig} value={values[fieldName]} onChange={onChange(fieldName)} />
              )
            })
            .filter(Boolean)}
        </FormRendererRow>
      ))}
    </Group>
  )
}

export default FormRenderer
