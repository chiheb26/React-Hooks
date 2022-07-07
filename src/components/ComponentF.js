import React from 'react'
import {userContext,idContext} from '../App'
function ComponentF() {
  return (
    <div>
        <userContext.Consumer>
            {
                username => {

                  return(  <idContext.Consumer>
                        {id=>{
                            return     <div>Component F<br/>
                                ------------------------<br/>
                                Hello {username}  - Id = {id}<br/>
                                -----------------------------<br/>
                                </div>
                        }}
                    </idContext.Consumer>)
            }
        }
        </userContext.Consumer>
    </div>
  )
}

export default ComponentF