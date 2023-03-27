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
      <div className='3xsm:max-h[60%] text-[gray] max-w-[60%] rounded-lg  max-h-[50%] w-[100%] h-[100%] shadow-2xl  shadow-[white]/10 bg-[#141414] 3xsm:max-w-[80%] 3xsm:max-h-[40%] xsm:h-[40%] xsm:max-w-[85%]'>
        <div className='m-20 text-xl  xsm:m-2 xsm:text-[12px]'>
          <div className='flex justify-between 3xsm:text-[8px]'>
            <div className='flex flex-col'>
        <h2 className='text-[gray] flex font-bold '>Email:<h1 className='2xsm:text-[10px] pl-2 3xsm:pl-[1px] font-normal'>{user.email}</h1></h2>
        <h2 className='text-[gray] flex font-bold pt-8 3xsm:pt-2 '>Password:<h1 className='pl-2 font-normal'>*****</h1></h2>
            </div>
        <div className='flex flex-col'>
        <button onClick={()=>{setBtn("Email")}} className='2xsm:p-[4px] 2xsm:text-[10px] 3xsm:text-[7px] 3xsm:p-[4px] 3xsm:py-[0px] p-2 rounded-lg bg-transparent border border-[white]/20 text-[white]/70 hover:underline hover:shadow-lg hover:shadow-[white]/20 transition-all'>Change Email</button>
        {btn && <ChangeUser btn={btn} email={newEmail}/>}
     
     
        <button onClick={()=>{setBtn("Pass")}} className='3xsm:mt-2 2xsm:p-[4px]  3xsm:text-[7px] 3xsm:p-[4px] 3xsm:py-[0px] p-2 mt-5 rounded-lg bg-transparent border border-[white]/20 text-[white]/70 hover:underline hover:shadow-lg hover:shadow-[white]/20 transition-all'>Change Password</button>
        </div>
          </div>

        <div className='flex mt-[80px] xsm:mt-[30px] justify-between 3xsm:text-[8px] 3xsm:mt-2 '>
        <h1 className="font-bold flex">Username: <h1 className='pl-2 font-normal '>{user.displayName}</h1></h1>
        <button onClick={()=>{setBtn("Username")}} className=' 2xsm:p-[4px] p-2 rounded-lg bg-transparent border border-[white]/20 text-[white]/70 3xsm:text-[7px] 3xsm:p-[4px] 3xsm:py-[0px]'>Change Username</button>
        

        </div>
        <div className='flex flex-col items-center 3xsm:text-[8px]'>
        <h2 className='py-10 pb-6 text-[gray] px-5 text-center  2xsm:py-2 ' >You've already signed In</h2>
        <button className='cursor-pointer bg-[red] text-white pt-1 pb-1 pl-4 pr-4 3xsm:px-[4px] 3xsm:py-[0px] 3xsm:text-[8px]'  onClick={signout}>Signout</button>
        </div>
      
        </div>
      </div>
    </div>
    }
    </div>
  )

}

export default Login