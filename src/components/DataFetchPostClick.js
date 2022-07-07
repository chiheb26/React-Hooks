import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchPostClick() {
    
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(res=>{
        setPost(res.data)
    }).catch(err=>{
            console.log(err);
        })
    },[idFromButtonClick])
    const handleClick = () => setIdFromButtonClick(id)
    return (
    <div>
        <input type="text" onChange={e => setId(e.target.value)} value={id} />
        <button onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchPostClick