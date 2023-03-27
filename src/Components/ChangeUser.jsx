import React from 'react'

function ChangeUser({btn,email}) {
  return ( 
    <div className='absolute top-[50%] left-[40%] p-8 bg-[#2C2C2C] '>
      {btn==="Email" && 'New Email:'}
      {btn==="Pass" && 'New Password:'}
      {btn==="Username" && 'New Username:'}
        <form className='pt-2' onSubmit={(event)=>email(event)} action="">
        <input type="text" name="" id="" />
        <button className='ml-4 bg-[pink] text-[black] p-1 font-bold  rounded-sm ' type='submit'>Save</button>
        </form>
    </div>
  )
}

export default ChangeUser