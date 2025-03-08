import React, { useEffect, useState } from 'react'
import axios from 'axios';

const index = () => {
    const[post,setPost] = useState();
 console.log(post);
    const getData = async()=>{
       
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            setPost(response.data)
    
        })
    }
    useEffect(()=>{
        getData();
    },[])
    
  return (
    <div>
     {
     post?.map((x)=>{
            return(
                <div>
                {post.map((item) => (
                    <div key={item.id}>
                        <h3>{item.userId}</h3>
                       
                    </div>
                ))}
            </div>
            )
        }
     )
     }
    </div>
  )
}

export default index
