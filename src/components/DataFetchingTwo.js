import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState= {
    loading : true ,
    error : '' ,
    post : {}
}
const reducer = (state , action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error : '',
                post : action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post : {},
                error : 'Something went wrong !'
            }    
        default:
            return state
    }
}
function DataFetchingTwo() {
    
    const   [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            dispatch({type :'FETCH_SUCCESS', payload : res.data})
        }).catch(err=>{
            dispatch({type:'FETCH_ERROR'})

        })
    },[])

    return (
    <div>
      <h2> {state.loading?'Loading':state.error? state.error : state.post.title} </h2>
    </div>
  )
}

export default DataFetchingTwo