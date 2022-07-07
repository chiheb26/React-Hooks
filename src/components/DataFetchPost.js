import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchPost() {
    
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
        setPost(res.data)
    }).catch(err=>{
            console.log(err);
        })
    },[id])
    return (
    <div>
        <input type="text" onChange={e => setId(e.target.value)} value={id} />
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchPost