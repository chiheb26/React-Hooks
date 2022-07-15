import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentA() {

  const countContext = useContext(CountContext)
  return (
    <div>
        <h3>ComponentA | {countContext.countState}</h3>
        <button onClick={()=>countContext.countDispatch('increment')} >Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')} >Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')} >Reset</button>
    </div>
  )
}

export default ComponentA

/*


import React,{useReducer} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';


export const CountContext = React.createContext()

const initialState  = 0
const reducer = (state, action ) => {

    switch(action){
        case 'increment':
            return state + 1 
        case 'decrement':
            return state -1 
        case 'reset':
            return initialState
        default:
            return state
    }
}
function App() {


  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{ countState : count , countDispatch : dispatch }}>
    <div className="App">
      <h1>Count = {count}</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  );
}

export default App;

*/