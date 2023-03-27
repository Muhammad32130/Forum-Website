import React, { useState } from 'react'
import {render, Link } from 'react-router-dom'
import Header from '../Components/Header'
import Modal from "../Components/Modal"
import Post from '../Components/Post'


function Home({signout, printDoc, setSubtitle, setTitle, data,user, updatepost,setselected, clicked}) {
  const [modal, setmodal]= useState(false)
  const [ sel ,  setSel ] = useState('All Topics')
  let dataRef = ""
  
  if(sel === 'All Topics'){
    dataRef = data?.map((data)=>{
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
  }else {
      const newData =  data?.filter((data)=> data?.Topic === sel)

    dataRef = newData?.map((data)=>{

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
  }
     
    

  return (<> 
<div className='h-screen '>
<Header signout={signout} user={user}/>

 <Modal clicked={clicked} setselected={setselected} data={data} setTitle={setTitle} printDoc={printDoc} setSubtitle={setSubtitle} setShow={setmodal}  modal={modal}/>
<div className='flex justify-end items-start color text-[orange] '>
  <div className=' w-[100%] overflow-hidden flex 3xsm:mt-14 flex-col items-center justify-center '>
   
   {dataRef}
 
  </div>
  <div className='flex absolute left-8 pt-8 3xsm:left-2 3xsm:text-[10px] xsm:left-2 xsm:text-[12px]  text-[black]'>
    <div className='text-[gray]    '>
    Select Search: 
  </div>
  <select onChange={(e) => {setSel(e.target.value)}   } name="Topic" className='border rounded ml-2 w-[112px] h-[25px] bg-[black] text-white 3xsm:w-[80px] 3xsm:h-[20px]' id="Topic" required>
          <option value="All Topics" selected>All Topics</option>
          <option value="Off-Topic">Off-Topic</option>
          <option value="Games">Games</option>
          <option value="Technology">Technology</option>
        </select>
        
  </div>
  {user?
    <button onClick={()=>setmodal(true)} className='forum__btn 3xsm:p-[4px] 3xsm:mt-7 3xsm:mr-[16px] 3xsm:text-[14px]  '>Post Forum</button>
    :

    <Link to='/login'>
    <button onClick={()=>setmodal(true)} className=' right-1 forum__btn'>Post Forum</button>
    </Link>
  }
</div>
</div>
  </>
  )
}

export default Home