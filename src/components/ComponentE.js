import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {userContext,idContext} from '../App'
function ComponentE() {
  
  
    const user = useContext(userContext)
    const id = useContext(idContext)
    return (
    <div>
  <br/>  Component E <br/>
    -----------------<br/>
        {user} --- {id}<br/>
    -----------------<br/><br/>
    <ComponentF />
    </div>
  )
}

export default ComponentE