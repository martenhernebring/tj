import { useState, useEffect, useMemo } from 'react'
import InputComponent from '../InputComponent/InputComponent'
import OutputComponent from '../OutputComponent/OutputComponent'
import fetch from 'node-fetch';

function ContentComponent() {

  const[input, setPath, setInput] = useState();
  const[childKey] = useState(7)

  const actionToTriggerReload = () => {
    const newKey = this.state.childKey * 89; // this will make sure the key are never the same
    this.setState({childKey: newKey})
       }

  const throttledAPICall = useMemo(() => throttle(async (input) => {
    try {
      //new URL(input)
      //const backend = 'http://localhost:9000/files/10' //+ 
        //parseInt(Math. floor(Math. random() * 100) + 1) 
      fetch('http://localhost:9000/files/10')(
          () => setTimeout(() => {}, 500), [])
          .then(result => {
            result => result.json()
            console.log(result)
            setPath[result.exists]
            actionToTriggerReload
      })
    } catch (err) {
      //invalid url
      console.log(err)
    }
  })) 

  useEffect(() => {
    throttledAPICall(input) 
  }, [input, throttledAPICall, setPath])
  
  const handleChange = e => {
    setInput(e.target.value)
  } 

  return (
      <div className='column'>
        <InputComponent input={input} onChange={handleChange}
        ></InputComponent>
          <OutputComponent data={input} key={childKey}>
          </OutputComponent>
      </div>
  )

}

function throttle(func, limit) {
  let inThrottle = false;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

export default ContentComponent