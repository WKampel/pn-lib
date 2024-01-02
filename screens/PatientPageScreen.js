import PageField from '../components/PageField'
import Screen from '../components/Screen'
// import useQuery from '../hooks/useQuery'
// import GET_PAGE from '../queries/GET_PAGE'
import Card from '../components/Card'

const PatientPageScreen = ({ data = {} }) => {
  return (
    <Screen>
      <Card scroll style={{ flexGrow: 1 }}>
        {data?.items?.map(item => (
          <PageField key={item.id} field={item} />
        ))}
      </Card>
    </Screen>
  )
}

export default PatientPageScreen
