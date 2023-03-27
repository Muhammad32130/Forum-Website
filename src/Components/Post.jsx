import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../config/firebase';

function Post({title, subtitle,username,user, updatepost,data}) {

  const [edit , setEdit] = useState(false)


  async function postComment(event){
  event.preventDefault();
  const comments =  {
    comment:event.target[0].value, 
     id: data.id,
     user:user.displayName + ": "
   }
   const docRef = doc(db, "posts", comments.id)
  const newPost = await {
    comments: [
      ...data.comments,
      comments.user  + 
       comments.comment 
    ]
  }
  await updateDoc(docRef, newPost)
  window.location.href=window.location.origin
  }
  async function deletePost(id){
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef)
    window.location.href=window.location.origin
  }


    
  async function UpdatePost(e){
    e.preventDefault()
      const docRef = doc(db, "posts", data?.id)
      const newPost = await {
        title: e.target[0].value,
        subtitle: e.target[1].value,
      }
      await updateDoc(docRef, newPost)
      window.location.href=window.location.origin
    }
  

console.log(edit)

  return (
    <div className=' h-[40%] min-[425px]:h-[240px] min-[425px]:w-[380px] bg-[white]  mb-[20px]   w-[280px] '>
        {!edit ? <div className='flex flex-col items-start  text-[10px] min-[425px]:mt-2 ' >
          <div className='  text-[12px] flex   items-center justify-between w-[100%] text-xl  text-[black] italic font-semibold h-[30px]    '>
            <h1 className=' ml-5 text-[16px]  min-[425px]:text-[18px] '>
          {username}
            </h1>
          {user?.uid === data?.uid ?
          <div className=' text-[12px] flex mt-6 mr-2'>
            <button onClick={() => {deletePost(data?.id)}} className='mr-2 px-1 border '>Delete </button>
           
            <button onClick={ () => {setEdit(true)}} className='border px-1 '>Edit</button>         
          </div>
            :null}
          </div>
          
              <div className='flex flex-col '>
                <h1 className=' m-5 text-black font-bold text-2xl text-[14px] mb-2 mt-0 min-[425px]:text-[16px] min-[425px]:mt-2'  >
              {`#${data?.Topic}`}
                </h1>
                <h1 className=' ml-5   text-black font-semibold text-2xl  m-2  mt-0  mb-0  leading-relaxed  text-[15px]  min-[425px]:text-[18px]   '>
                {title}
                </h1>
              </div>
            <p className=' text-black text-xl  leading-normal  ml  text-[13px]   my-2   ml-5 min-[425px]:text-[14px] ' >{subtitle}</p>
            <form className='flex flex-col  mt-1 ' onSubmit={(event)=>postComment(event)}>
            <textarea placeholder='Comment'  name="comment" className=' w-[280px]  h-[100px] border border-[#14141] mr-10 mt-5]  max-w-[140px]  max-h-[20px]  mt-0 ml-4  min-[425px]:max-h-[40px] min-[425px]:max-w-[180px] '  id="" cols="80" rows="8" ></textarea>
            <button type='submit' className='text-[#141414]  border rounded   mt-[6px]  p-[2px]  mb-[6px]  w-[60px]  ml-5  '>Comment </button>
            </form>
            {data.comments?.map((comment)=>{
              return(<>
                  <h2 className='ml-10 text-[black] font-bold   '>Comments:</h2>
                <div className='comment border  ml-2 '>
                {comment}
              </div>
              </>
                )
            })}
        </div>: <div>
          <div className='m-12 text-[black]'>
            <form onSubmit={(e)=>UpdatePost(e)}>
          <label>Title:</label>
        <input required defaultValue={title} className=' font-semibold fontStyle-italic w-[100%] rounded border border-[#141414] focus:outline-none ' type="text" />
        <label>SubTitle:</label>
        <textarea required defaultValue={subtitle} className='w-[100%] h-[100px] min-[425px]:h-[80px] rounded border border-[#141414] focus:outline-none' type="text-area" />
        <button className='border px-1' type='submit'>Save</button>
            </form>
          </div>
          </div>}

    </div>
  )
}

export default Post
