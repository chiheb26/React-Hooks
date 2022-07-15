import React,{useEffect,useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)
    useEffect(()=>{
        // Focus the input element (componentDidMount())
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} typ="text" />
    </div>
  )
}

export default FocusInput