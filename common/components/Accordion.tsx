import { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from '../hooks/useTheme'
import { AccordionItem } from './AccordionItem'

export type AccordionProps = {
  items: {
    title: string
    body: string
  }[]
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { tokens } = useTheme()
  return (
    <View style={{ gap: tokens.spacing_m }}>
      {items.map((item, i) => (
        <AccordionItem
          {...item}
          isOpen={openIndex === i}
          setIsOpen={() => {
            if (openIndex === i) setOpenIndex(null)
            else setOpenIndex(i)
          }}
        />
      ))}
    </View>
  )
}
