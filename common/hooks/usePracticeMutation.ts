import { DocumentNode } from '@apollo/client'
import { UseMutationConfig, useMutation } from './useMutation'
import { usePractice } from './usePractice'

type PracticeVariables<TVariables extends object> = TVariables & { practiceId?: number }

export type UsePracticeMutationConfig<TData, TVariables> = UseMutationConfig<TData, Omit<TVariables, 'practiceId'>>

export const usePracticeMutation = <TData, TVariables extends object = {}>(query: DocumentNode, config: UsePracticeMutationConfig<TData, TVariables>) => {
  const practice = usePractice()

  // Include practiceId in variables if it's defined
  const variables: PracticeVariables<TVariables> = { ...config.variables, practiceId: practice.data?.id } as PracticeVariables<TVariables>

  const mutationResult = useMutation<TData, PracticeVariables<TVariables>>(query, {
    ...config,
    variables,
  })

  return mutationResult
}
