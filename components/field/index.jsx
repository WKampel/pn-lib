import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default props => {
  return (
    <View style={[styles.field, props.style]}>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
      <View style={styles.children}>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    marginTop: 5,
    marginBottom: 10,
  },
  label: { marginBottom: 7, paddingLeft: 5, fontSize: 12, color: '#616161', fontWeight: 'bold' },
  children: {
    flexDirection: 'row',
  },
})

// const FieldValidate = props => {
//   const [valid, setValid] = useState(true)

//   useEffect(() => {
//     setValid(props.validate())
//     if (props.onChange) props.onChange(props.validate())
//   }, [props.validate()])

//   if (Array.isArray(props.children)) return "Can't use array in FieldValidate"

//   let headerRight = props.children.props.headerRight

//   /* In future, combine existing headerRight with error. Don't currently know how to combine strings with JSX */
//   if (valid !== true) headerRight = <div className={styles.error}>{valid}</div>
//   return React.cloneElement(props.children, { headerRight })
// }
