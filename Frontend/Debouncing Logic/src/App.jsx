import { useState, useEffect } from "react"

function useDebounce(input, n) {
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const val = setTimeout(() => {
      setDebouncedValue(input)
    }, n)

    return () => {
      clearInterval(val)
    }
  }, [input])

  return debouncedValue
}

function App() {
  const [input, setInput] = useState('')
  const debouncedValue = useDebounce(input, 200)
  
  return <>
    This is Debounced Value - {debouncedValue}
    <input type='text' onChange={(e) => {setInput(e.target.value)}} />
  </>
}
 
export default App