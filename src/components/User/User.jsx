import React from 'react'
import { useParams } from 'react-router-dom' //using this method we get the acces to the varible userid
function User() {
    const {userid}=useParams(); //creating the method
  return (
    <div className='bg-slate-500 text-white'>
      User: {userid}
    </div>
  )
}

export default User
