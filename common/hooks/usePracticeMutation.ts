import { DocumentNode } from '@apollo/client'
import usePractice from '../../hooks/usePractice'
import { UseMutationConfig, useMutation } from './useMutation'

type PracticeVariables<TVariables extends object> = TVariables & { practiceId?: number }

export const usePracticeMutation = <TData = any, TVariables extends object = {}>(
  query: DocumentNode,
  config: UseMutationConfig<TData, Omit<TVariables, 'practiceId'>> = { variables: {} as Omit<TVariables, 'practiceId'> }
) => {
  const practice = usePractice()

  // Include practiceId in variables if it's defined
  const variables: PracticeVariables<TVariables> = { ...config.variables, practiceId: practice.id } as PracticeVariables<TVariables>

  const mutationResult = useMutation<TData, PracticeVariables<TVariables>>(query, {
    ...config,
    variables,
  })

  return mutationResult
}
