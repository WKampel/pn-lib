import { DocumentNode } from '@apollo/client'
import { UseMutationConfig, useMutation } from './useMutation'
import { usePractice } from './usePractice'

type PracticeVariables<TVariables extends object> = TVariables & { practiceId?: number }

export const usePracticeMutation = <TData, TVariables extends object = {}>(query: DocumentNode, config: UseMutationConfig<TData, Omit<TVariables, 'practiceId'>>) => {
  const practice = usePractice()

  // Include practiceId in variables if it's defined
  const variables: PracticeVariables<TVariables> = { ...config.variables, practiceId: practice.data?.id } as PracticeVariables<TVariables>

  const mutationResult = useMutation<TData, PracticeVariables<TVariables>>(query, {
    ...config,
    variables,
  })

  return mutationResult
}
