import { useEffect, useRef, useState, handleChange } from 'react';
import './InputComponent.css';

function InputComponent(input) {
  const inputRef = useRef()
  const [isFocused, setIsFocused] = useState(false)
  
  useEffect(() => {
    const input = inputRef.current
    if(input && !isFocused) {
      input.value = input
    }
  }, [input, isFocused])

  return (
    <input
        type='text'
        ref={inputRef.value}
        defaultValue={input.value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    )
}

export default InputComponent