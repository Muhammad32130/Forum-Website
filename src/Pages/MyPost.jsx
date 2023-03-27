import React from 'react'
import Header from '../Components/Header';
import Post from '../Components/Post';

function MyPost({ updatepost,data,user}) {
      const newData= data?.filter((data)=> data.uid === user?.uid)
      const dataRef = newData.map((data)=>{
        return(
          <Post
          user={user}
          data={data}
          updatepost={updatepost}
          key={data.key}
          title={data.title}
          subtitle={data.subtitle}
          username ={data.username}
          />
        )
      })
  return (
    <div className='h-screen bg-black items-center'>
        <Header></Header>
        <div className='flex flex-col items-center justify-center bg-black'>
    {dataRef}
        </div>
    </div>
  )
}

export default MyPost;