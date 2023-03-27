import React from 'react'
import {Link} from 'react-router-dom'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function Header({signout, user}) {

    const [ modal, setModal ] = useState(false)

console.log(modal)
  return (
    <div>
        <nav className='flex bg-[#141414] text-[white] h-20 justify-between'>
            <div className=' flex w-[20%] items-center' >
                <h1 className='text-lg pl-5'>
                    <Link to="/">
            Forums
                    </Link>
                </h1>
            </div>
            <div className='flex items-center justify-center'>

                    



            {user===null?<Link to="/login">
                <button className='mx-5 h-10 px-5 cursor-pointer bg-[white]/5 rounded'>Sign in</button>
            </Link>: null}
                 {!user ? null :<button onClick={ () => { setModal(!modal) }  } className='  cursor-pointer bg-[gray] w-10 mr-16 max-[325px]:mr-3 rounded '> <FontAwesomeIcon className='   gear w-9' icon={faGear}/> </button>}



                <div className={`fireDiv bg-[transparent] absolute top-12 mt-2 right-8 max-[325px]:right-4 ${modal? 'opacity-100 translate-y-0 z-30':null}`}>
                <div className='flex flex-col items-center max-[325px]:items-end' >

                <div class=" w-0 h-0 max-[325px]:mr-3
                
    border-l-[5px] border-l-transparent
    border-b-[8px] border-b-[gray]
    border-r-[5px] border-r-transparent">
</div>
    <div className=' flex flex-col modalColor text-black pl-4 pr-4 pt-5 pb-5 '>
        <Link to="/login" className=' border-b border-[black]/30 pb-3 mb-3 ' > Account </Link>
        <Link to="/mypost" className='border-b border-[black]/30 pb-3 pt-1 mb-3'>My posts</Link>
        <Link to="/" className=' border-b border-[black]/30 pb-3 pt-1 mb-3  ' > Contact Us </Link>
        <button onClick={signout}> Sign-out </button>



    </div>
                </div>



        </div>
            </div>
        </nav>
    </div>
  )
}

export default Header