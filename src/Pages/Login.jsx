import { updateEmail, updatePassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, renderMatches } from 'react-router-dom'
import Header from '../Components/Header'
import { auth } from '../config/firebase'
import ChangeUser from "../Components/ChangeUser"

function Login({ setpass, setemail, signin, user, signout}) {
  const [btn, setBtn] = useState("")



    function newEmail(event){
      event.preventDefault()
      console.log(event.target[0].value)
      if(btn==="Email"){
        updateEmail(auth.currentUser, event.target[0].value ).then(()=>{
        }).catch((error)=>{
          alert(error.message)
        } )
      }else if (btn ==="Username"){
        updateProfile(auth.currentUser,{
          displayName: event.target[0].value
        })
      }else if (btn==="Pass"){
        updatePassword(auth.currentUser, event.target[0].value).then(()=>{

        }).catch((error)=>{
          alert(error.message)
        })
      }
      window.location.href=`${window.location.origin}/login`
    }
    
    
    console.log(user)

  return (


    // LOGIN PAGE START
    <div className='h-screen overflow-y-hidden'>
      <Header signout={signout} user={user} />
    {user===null? <div className='bg-[gray]/70  flex h-[calc(100%-20px)] items-center '>
        <div className='flex mx-auto h-3/6  '>
            <div className='rounded flex mx-auto  border px-10 items-center '>
            <div className=' flex flex-col justify-center' >
             <label className=''>Email:</label><input onChange={(e)=>setemail(e.target.value)} className='mb-5 mt-2 p-2 focus:outline-none border' type="email" placeholder='e-mail'  />
               <label >Password:</label><input onChange={(e)=>setpass(e.target.value)} className='mb-8 mt-2 p-2 focus:outline-none' type="password" placeholder='password' />
               <div className='w-[100%] flex flex-col items-center'>
               <button onClick={signin} className='cursor-pointer bg-[#070301] text-white w-[100px]' >
                Login
              </button>
              <Link to='/signup'>
            <button className='pt-4'>New user? Sign up Now</button>
              </Link>
               </div>
            </div>
            </div>
        </div>
    </div>:
    // Account Settings
    <div className='flex border-t  flex-col justify-center items-center h-[calc(100%-20px)] color'>
      <div className=' text-[gray] xl:w-[60%] rounded-lg w-[100%] shadow-2xl  shadow-[white]/10 bg-[#141414] lg:w-[70%] max-w-[85%] '>
        <div className='text-xl sm:m-5 m-2  text-[12px] lg:mb-8'>
          <div className='flex justify-between xl:my-14 text-[8px]'>
            <div className='flex flex-col sm:text-[20px] lg:text-[22px]  '>
        <h2 className='text-[gray] flex font-bold lg:text-[22px] xl:mb-12 sm:mb-2 md:mb-6'>Email:<h1 className=' sm:text-[20px] text-[10px] pl-[1px] font-normal'>{user.email}</h1></h2>
        <h2 className='text-[gray] flex font-bold lg:text-[22px] sm:mb-2 md:mb-6 pt-2'>Password:<h1 className='sm:text-[20px] pl-2 font-normal'>*****</h1></h2>
            </div>
        <div className='flex flex-col '>
        <button onClick={()=>{setBtn("Email")}} className='sm:text-[10px] xl:mb-8 xl:text-[20px] xl:p-3 md:text-[12px] md:py-1 sm:px-4 text-[7px]  p-[4px]  py-[0px] rounded-lg bg-transparent border border-[white]/20 text-[white]/70 hover:underline hover:shadow-lg hover:shadow-[white]/20 transition-all'>Change Email</button>
        {btn && <ChangeUser btn={btn} email={newEmail}/>}
     
     
        <button onClick={()=>{setBtn("Pass")}} className='md:mt-4 sm:text-[10px] md:px-3 md:py-1 xl:p-3 xl:text-[20px] md:text-[12px] sm:mt-8 mt-2 p-[4px]   text-[7px]   py-[0px] rounded-lg bg-transparent border border-[white]/20 text-[white]/70 hover:underline hover:shadow-lg hover:shadow-[white]/20 transition-all'>Change Password</button>
        </div>
          </div>

        <div className='flex justify-between  text-[8px]  mt-2 '>
        <h1 className="font-bold flex sm:text-[18px] lg:text-[22px]  ">Username: <h1 className='pl-2 font-normal '>{user.displayName}</h1></h1>
        <button onClick={()=>{setBtn("Username")}} className='md:px-2 sm:text-[10px] md:text-[12px] xl:p-3 xl:text-[20px] p-[4px] md:py-1  rounded-lg bg-transparent border border-[white]/20 text-[white]/70  text-[7px]    py-[0px]'>Change Username</button>
        

        </div>
        <div className='flex flex-col items-center  text-[8px]'>
        <h2 className=' pb-2 text-[gray] px-5 text-center sm:text-[16px] sm:mt-4 xl:text-[22px] xl:py-4 py-2 ' >You've already signed In</h2>
        <button className='cursor-pointer bg-[red] text-white py-[0px]  px-1 xl:px-6 xl:text-[18px] sm:text-[10px] sm:px-2 sm:mt-2 text-[6px] '  onClick={signout}>Signout</button>
        </div>
      
        </div>
      </div>
    </div>
    }
    </div>
  )

}

export default Login