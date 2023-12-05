import usePractice from './usePractice'
import useQuery from './useQuery'

export const usePracticeQuery = (query, config = {}) => {
  const practice = usePractice()

  config.variables = {
    ...(config.variables || {}),
    practiceId: practice.id,
  }

  config.skip = config.skip || practice.loading || !practice.id

  const queryResult = useQuery(query, config)

  return queryResult
}
