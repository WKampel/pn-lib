import { useState } from 'react'
import { View } from 'react-native'
import useStyles from '../../hooks/useStyles'
import AccordionItem from './AccordionItem'

const Accordion = ({ items }) => {
  const styles = useStyles(styleConfig)
  const [openIndex, setOpenIndex] = useState(false)

  return (
    <View style={styles.accordion}>
      {items.map((item, i) => (
        <AccordionItem
          {...item}
          isOpen={openIndex === i}
          setIsOpen={() => {
            if (openIndex === i) setOpenIndex(false)
            else setOpenIndex(i)
          }}
        />
      ))}
    </View>
  )
}

const styleConfig = {
  base: {
    accordion: {
      gap: '$spacing-xl',
    },
  },
}

export default Accordion
