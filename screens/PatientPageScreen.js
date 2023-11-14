import PageField from '../components/PageField'
import Screen from '../components/Screen'
// import useQuery from '../hooks/useQuery'
// import GET_PAGE from '../queries/GET_PAGE'
import Card from '../components/Card'

const PatientPageScreen = ({ data = {} }) => {
  return (
    <Screen>
      <Card scroll style={{ flexGrow: 1 }}>
        {data?.fields?.map(field => (
          <PageField key={field.id} field={field} />
        ))}
      </Card>
    </Screen>
  )
}

export default PatientPageScreen
