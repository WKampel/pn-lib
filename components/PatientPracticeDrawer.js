import useQuery from '../hooks/useQuery'
import GET_ACTIVE_PAGES from '../queries/GET_ACTIVE_PAGES'
import PracticeDrawer from './PracticeDrawer'

const PatientPracticeDrawer = props => {
  const { data } = useQuery(GET_ACTIVE_PAGES)

  const activePages = data?.activeCustomPages || []

  const items = activePages
    .map(page => ({
      label: page.name,
      to: '',
    }))
    .concat({
      label: 'Contact Us',
      to: 'contact-us',
    })

  return <PracticeDrawer items={items} {...props} />
}

export default PatientPracticeDrawer
