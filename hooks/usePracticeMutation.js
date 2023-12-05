import useMutation from './useMutation'
import usePractice from './usePractice'

export const usePracticeMutation = (query, config = {}) => {
  const practice = usePractice()

  config.variables = {
    ...(config.variables || {}),
    practiceId: practice.id,
  }

  const mutationResult = useMutation(query, config)

  return mutationResult
}
