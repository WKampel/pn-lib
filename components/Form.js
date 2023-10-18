import { StyleSheet, Text, View } from 'react-native'
import { usePractice } from '../contexts/Practice'
import FormField from './FormField'
import Section from './Section'

const Form = ({ setResponses, name, desc, fields, responses = {} }) => {
  const practice = usePractice()

  return (
    <Section>
      <View>
        <Text style={styles.headerText}>{practice.name}</Text>
        <Text style={styles.headerText}>{practice.slogan}</Text>
        <Text style={styles.headerText}>{practice.email}</Text>
        <Text style={styles.headerText}>{practice.phone}</Text>
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      {fields?.map((field, i) => (
        <FormField
          key={field.id}
          type={field.type}
          required={field.required}
          label={field.name}
          options={field.options}
          onChange={val => setResponses && setResponses({ ...responses, [field.id]: val })}
          value={responses[field.id]}
        />
      ))}
    </Section>
  )
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    marginBottom: 15,
  },
})

export default Form
