import React,{useContext} from 'react'
import ComponentF2 from './ComponentF2'
import {userContext,idContext} from '../App'
function ComponentE2() {
  
  
    const user = useContext(userContext)
    const id = useContext(idContext)
    return (
    <div>
  <br/>  Component E <br/>
    -----------------<br/>
        {user} --- {id}<br/>
    -----------------<br/><br/>
    <ComponentF2 />
    </div>
  )
}

export default ComponentE2