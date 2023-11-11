import { useState } from 'react'

const useInteractive = () => {
  const [states, setStates] = useState({
    hovered: false,
    focused: false,
    pressed: false,
  })

  const interactiveEvents = {
    onMouseEnter: () => setStates(prev => ({ ...prev, hovered: true })),
    onMouseLeave: () => setStates(prev => ({ ...prev, hovered: false })),
    onFocus: () => setStates(prev => ({ ...prev, focused: true })),
    onBlur: () => setStates(prev => ({ ...prev, focused: false })),
    onPressIn: () => setStates(prev => ({ ...prev, pressed: true })),
    onPressOut: () => setStates(prev => ({ ...prev, pressed: false })),
  }

  return {
    states,
    interactiveEvents,
    ...states,
    ...interactiveEvents,
  }
}

export default useInteractive
