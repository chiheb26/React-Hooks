import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingOne() {

  const [loading, setLoading] = useState(true)
  const [error,setError] = useState("") 
  const [post, setpost] = useState({})

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res=>{
        setLoading(false)
        setpost(res.data)
        setError("")

    }).catch(err=>{
        setLoading(false)
        setpost({})
        setError("Something went wrong !")

    })
  },[])
  return (
    <div>
       <h2> {loading?'Loading':error? error : post.title} </h2>
    
       
    </div>
  )
}

export default DataFetchingOne