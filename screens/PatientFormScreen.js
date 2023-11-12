import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import Card from '../components/Card'
import FormField from '../components/FormField'
import Group from '../components/Group'
import Screen from '../components/Screen'
import usePractice from '../hooks/usePractice'
import useStyles from '../hooks/useStyles'

const PatientFormScreen = ({ id, data, onSubmit }) => {
  const practice = usePractice()

  const [fields, setFields] = useState([])
  const [responses, setResponses] = useState({})

  const styles = useStyles(styleConfig)

  useEffect(() => {
    setFields(data.fields)
  }, [data])

  return (
    <Screen>
      <Card scroll style={{ flexGrow: 1 }}>
        <View>
          <Text style={styles.headerText}>{practice.name}</Text>
          <Text style={styles.headerText}>{practice.slogan}</Text>
          <Text style={styles.headerText}>{practice.email}</Text>
          <Text style={styles.headerText}>{practice.phone}</Text>
        </View>

        <View>
          <Text style={[styles.headerText, styles.name]}>{data.name}</Text>
          <Text style={[styles.headerText, styles.desc]}>{data.desc}</Text>
        </View>

        <Group>
          {fields?.map(field => (
            <FormField key={field.id} {...field} onChange={val => setResponses && setResponses({ ...responses, [field.id]: val })} value={responses[field.id]} />
          ))}
        </Group>

        <Button text='Submit' onPress={onSubmit} />
      </Card>
    </Screen>
  )
}

const styleConfig = {
  base: {
    headerText: {
      textAlign: 'center',
    },
    name: {
      fontSize: '$font-size-l',
      fontWeight: '$weight-semi-heavy',
    },
  },
}

export default PatientFormScreen
