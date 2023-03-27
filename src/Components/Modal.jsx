import {  faHourglassEnd} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


function Modal({modal,setShow,printDoc, setTitle, setSubtitle, data,setselected,clicked}) {

 


  return (<div className={` overflow-hidden flex items-center justify-center bg h-[calc(100%-80px)]  absolute w-[100%]  ${modal? 'z-10':'-z-10'}`}>
    {modal && data.length > 0  ? 
      <div className='forum rounded shadow-2xl min-[425px]:h-[60%]  w-[80%]  h-[50%] '> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0KquDHvsHnUMcZEYWpGEJJP9-xIIiPLSbXd1xFnEJ6EA70Sq2pSZsaiXcDf1CrF7jLY&usqp=CAU"  onClick= { () => setShow(false)}  className='img__close' alt="" />
      <div className='flex  flex-col h-[100%] pl-2  text-[12px]  ' >
        <h2 className='pt-1 text-[14px] font-semibold min-[425px]:mb-5 '>
      Add Forum
        </h2>
        <div className='mt-0 flex items-start justify-center '>
          <div className='flex-col flex w-[50%]'>
          {/* <form onSubmit ={printDoc} className='flex flex-col items-center'> */}
            <div className='w-[100%] pb-2'>

        <label className='pb-2 ' >Title:</label></div> <input required onChange={(e)=> setTitle(e.target.value)} className=' font-semibold fontStyle-italic w-[100%] rounded border border-[#141414] focus:outline-none ' type="text" />
            <div className='w-[100%]  pb-2 '>
        <label className='mt-8 pb-2 '>SubTitle:</label> </div> <textarea required className='w-[100%] rounded border border-[#141414] focus:outline-none  h-[50px] ' onChange={(e) => setSubtitle(e.target.value)} type="text-area" />
        <button className='submit__btn' onClick={()=>{printDoc()}}>Submit</button>
          {/* </form> */}
          </div>
          <div className='w-[45%] mx-2  '>

       <label htmlFor="">Topic: </label>
        <select onChange={(e)=>setselected(e.target.value)} name="Topic" className='border rounded  mt-2  ml-0 ' id="topic" required>
        <option value="" selected disabled hidden>Select Topic</option>
          <option value="Off-Topic">Off-Topic</option>
          <option value="Games">Games</option>
          <option value="Technology">Technology</option>
        </select>
          <img className='w-[100%] mt-6' src="https://www.supersoluce.com/sites/default/files/node/2794307/soluce-mortal-kombat-11-toutes-les-fatalites-all-fatality-mk11-001_0.jpg " alt="" />
          </div>
        </div>
      </div>
      <div className={`w-12 min-[425px]:w-16 rocket ${clicked? `fly`: null} `}>
        <img src='https://lh3.googleusercontent.com/xh2nXv0xTo01T3PBjWW0ElYl9OclUS_d_7QXAu9mNauMEZ3MKoe7fHG7u9glV2T9huWKEeQgSLj7J5hzS9c-eKyngj_RyWlSdCjLqYnm' className='w-[100%] h-[100%]' alt="" />
      </div>
      </div>
      
      :
      <div className='color w-[100%] h-[100%] flex items-center'>
         <FontAwesomeIcon className='spinner'  icon = {faHourglassEnd}/>
         </div>
    }
    </div>
  )
}

export default Modal




