import { DocumentNode } from '@apollo/client'
import usePractice from '../../hooks/usePractice'
import { useQuery, UseQueryConfig } from './useQuery'

type PracticeVariables<TVariables extends object> = TVariables & { practiceId?: number }

export const usePracticeQuery = <TData = any, TVariables extends object = {}>(
  query: DocumentNode,
  config: UseQueryConfig<TData, Omit<TVariables, 'practiceId'>> = { variables: {} as Omit<TVariables, 'practiceId'> }
) => {
  const practice = usePractice()

  // Include practiceId in variables if it's defined
  const variables: PracticeVariables<TVariables> = { ...config.variables, practiceId: practice.id } as PracticeVariables<TVariables>

  // Adjust the 'skip' condition
  config.skip = config.skip || practice.loading || !practice.id

  const queryResult = useQuery<TData, PracticeVariables<TVariables>>(query, {
    ...config,
    variables,
  })

  return queryResult
}
