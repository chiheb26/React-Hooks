import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const userContext = React.createContext()
export const idContext = React.createContext()
function App() {


  return (
    <div className="App">
      <userContext.Provider value="ThuNDeR">
        <idContext.Provider value="1">
            <ComponentC />
        </idContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
