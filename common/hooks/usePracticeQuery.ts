import { DocumentNode } from '@apollo/client'
import { usePractice } from './usePractice.ts/index.ios'
import { useQuery, UseQueryConfig } from './useQuery'

type PracticeVariables<TVariables extends object> = TVariables & { practiceId?: number }

export type UsePracticeQueryConfig<TData, TVariables> = UseQueryConfig<TData, Omit<TVariables, 'practiceId'>>

export const usePracticeQuery = <TData, TVariables extends object = {}>(query: DocumentNode, config: UsePracticeQueryConfig<TData, TVariables>) => {
  const practice = usePractice()

  // Include practiceId in variables if it's defined
  const variables: PracticeVariables<TVariables> = { ...(config.variables || {}), practiceId: practice.data?.id } as PracticeVariables<TVariables>

  const queryResult = useQuery<TData, PracticeVariables<TVariables>>(query, {
    ...config,
    variables,
    skip: config.skip || practice?.loading || !practice.data?.id,
  })

  return queryResult
}
