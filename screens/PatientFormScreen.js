import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import FormField from '../components/FormField'
import Group from '../components/Group'
import Screen from '../components/Screen'
import usePractice from '../hooks/usePractice'
import useQuery from '../hooks/useQuery'
import useStyles from '../hooks/useStyles'
import GET_PAGE from '../queries/GET_PAGE'

const PatientFormScreen = ({ id, data: propData }) => {
  const practice = usePractice()
  const { data: queryData } = useQuery(GET_PAGE, { id })
  const data = propData || queryData?.page || {}

  const [fields, setFields] = useState([])
  const [responses, setResponses] = useState({})

  const styles = useStyles(styleConfig)

  useEffect(() => {
    setFields(data.fields)
  }, [data])

  return (
    <Screen>
      <ScrollView>
        <Group>
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
              <FormField
                key={field.id}
                {...field}
                onChange={val => setResponses && setResponses({ ...responses, [field.id]: val })}
                value={responses[field.id]}
              />
            ))}
          </Group>
        </Group>
      </ScrollView>
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
