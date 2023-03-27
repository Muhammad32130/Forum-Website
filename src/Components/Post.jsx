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
    <div className=' h-[50%] w-[50%] 3xsm:w-[250px] bg-[white] mt-[20px] mb-[20px] xsm:mt-20 xsm:w-[320px] '>
        {!edit ? <div className='flex flex-col items-start 3xsm:text-[10px] ' >
          <div className=' 3xsm:text-[12px] flex xsm:text-[15px] items-center justify-between w-[100%] text-xl mt-10 3xsm:mt-1 text-[black] italic font-semibold h-[30px]   '>
            <h1 className='3xsm:pl-2 pl-10 xsm:pl-5 '>
          {username}
            </h1>
          {user?.uid === data?.uid ?
          <div className='mr-10 max-[325px]:mr-2 max-[325px]:mt-2'>
            <button onClick={() => {deletePost(data?.id)}} className='mr-10 max-[325px]:mr-2 p-2 max-[325px]:p-[4px] border max-[325px]:text-[10px]'>Delete </button>
           
            <button onClick={ () => {setEdit(true)}} className='border p-2 max-[325px]:p-[4px] max-[325px]:text-[10px] '>Edit</button>         
          </div>
            :null}
          </div>
          
              <div className='flex flex-col '>
                <h1 className=' m-10 text-black font-bold text-2xl 3xsm:text-[10px] 3xsm:m-2 3xsm:mt-0 3xsm:mb-0 xsm:text-[14px] xsm:mb-2 xsm:m-5 xsm:mt-0' >
              {`#${data?.Topic}`}
                </h1>
                <h1 className='xsm:ml-5 xsm:mb-4 m-10 mt-1 text-black font-bold text-2xl 3xsm:text-[10px] 3xsm:m-2 3xsm:mt-0 3xsm:mb-0 3xsm:leading-relaxed xsm:text-[15px]   '>
                {title}
                </h1>
              </div>
            <p className='m-10 text-black text-xl 3xsm:text-[10px] 3xsm:m-2 3xsm:leading-normal 3xsm:ml xsm:text-[15px] xsm:mt-0 xsm:ml-5 ' >{subtitle}</p>
            <form className='flex flex-col 3xsm:mt-1 ' onSubmit={(event)=>postComment(event)}>
            <textarea placeholder='Comment'  name="comment" className='xsm:w-[280px] xsm:h-[100px] w- xsm:ml-2 border border-[#14141] mr-10 ml-10 mt-5] 3xsm:mt-0 3xsm:ml-2 3xsm:max-w-[140px] 3xsm:max-h-[20px] xsm:mt-0 '  id="" cols="80" rows="8" ></textarea>
            <button type='submit' className='text-[#141414] ml-10 mb-5 mt-5 p-2 border rounded w-[120px] 3xsm:ml-2 3xsm:mt-[6px] 3xsm:p-[2px] 3xsm:mb-[6px] 3xsm:w-[60px] xsm:ml-3   '>Comment </button>
            </form>
            {data.comments?.map((comment)=>{
              return(<>
                  <h2 className='ml-10 text-[black] font-bold 3xsm:ml-2 xsm:ml-5 '>Comments:</h2>
                <div className='comment border 3xsm:ml-2 xsm:ml-5  '>
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
        <textarea required defaultValue={subtitle} className='w-[100%] h-[200px] rounded border border-[#141414] focus:outline-none' type="text-area" />
        <button type='submit'>Save</button>
            </form>
          </div>
          </div>}

    </div>
  )
}

export default Post
