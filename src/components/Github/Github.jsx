import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
 const data=useLoaderData()

//Method1:-

    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Parthshukla26')
    //     .then(response=>response.json()) //converting the string format of reposne into json
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     }) //
    // },[])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers:{data.followers} 
      <img src={data.avatar_url} alt='git profile' width={300}/>
    </div>
  )
}

export default Github


//Methode 2:- Using the loader for more optimized api fetching
    
export const githubInfoLoader= async()=>{
    const response=await fetch('https://api.github.com/users/Parthshukla26')
    return response.json()
}
