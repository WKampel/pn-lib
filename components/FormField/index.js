// import FieldTypes from '../../config/FieldTypes'
// import FormFieldDate from './fieldTypes/FormFieldDate'
// import FormFieldLongText from './fieldTypes/FormFieldLongText'
// import FormFieldRadio from './fieldTypes/FormFieldRadio'
// import FormFieldSelect from './fieldTypes/FormFieldSelect'
// import FormFieldTextArea from './fieldTypes/FormFieldTextArea'
// import FormFieldTextInput from './fieldTypes/FormFieldTextInput'
// import FormFieldTime from './fieldTypes/FormFieldTime'
// import FormFieldTitle from './fieldTypes/FormFieldTitle'
// import FormFieldYesNo from './fieldTypes/FormFieldYesNo'

// const fieldComponents = {
//   [FieldTypes.TITLE]: FormFieldTitle,
//   [FieldTypes.TEXT_INPUT]: FormFieldTextInput,
//   [FieldTypes.TEXT_AREA]: FormFieldTextArea,
//   [FieldTypes.YES_NO]: FormFieldYesNo,
//   [FieldTypes.RADIO]: FormFieldRadio,
//   [FieldTypes.DROPDOWN]: FormFieldSelect,
//   [FieldTypes.DATE]: FormFieldDate,
//   [FieldTypes.TIME]: FormFieldTime,
//   [FieldTypes.LONG_TEXT]: FormFieldLongText,
// }

// const FormField = ({ type, required, name, ...otherProps }) => {
//   const Component = fieldComponents[type]

//   if (required) name += '*'

//   if (!Component) {
//     console.error(`FormField of type "${type}" is not recognized.`)
//     return null
//   }

//   return <Component {...otherProps} label={name} />
// }

// export default FormField
