import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login"
import { useState, useEffect } from "react";
import { auth, db  } from "./config/firebase";
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import Forum from "./Components/Forum";
import Home from './Pages/Home'
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Signup from "./Pages/Signup";
import MyPost from "./Pages/MyPost";
import ChangeUser from "././Components/ChangeUser"





function App() {
  const [ username, setUsername ] = useState(null);
  const [users, setUser] = useState(null)
  const [email, setemail]= useState('')
  const [pass, setpass]= useState('')
  const [title, setTitle]= useState('')
  const [subtitle, setSubtitle]= useState('')
  const ref = collection(db, "posts");
  const [data, setdata] = useState([])
  const [post, Updatepost]=useState([])
  const [select, setselected]= useState("")
  const [clicked, setclicked] = useState(false)
  console.log(select)
  async function printDoc(){

    if(select===""){ 
      setclicked(false)
      return(
        alert("selection required")
        )
    }
    const docref= await addDoc(ref, {
      title:title,
      subtitle:subtitle,
      username: users?.displayName,
      comments:[],
      uid: users?.uid,
      Topic:select,
    }).then(()=>{
      setclicked(true)
      setTimeout(() => {
        window.location.href= `${window.location.origin}`
      }, 1300);
  })
}

async function Doc(){
  const data = await getDocs(collection(db, "posts"));
  const posts = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
  setTimeout(() => {
    setdata(posts)
  }, 500);
}
useEffect(()=>{
  Doc()
  
},[])
console.log(data)




function signin(){
  signInWithEmailAndPassword(auth, email, pass)
  .then((user)=>{
    localStorage.setItem("username", username)
    window.location.href=`${window.location.origin}`
    console.log(user?.displayName)
    
  })
  .catch((error)=>{
    alert(error.message)
  })
}
useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    if(user?.displayName===null){

      updateProfile(user,{
        displayName:localStorage.getItem("username")
      })
    }
    setUser(user)
  })
})
console.log(users)

function signUp() {
  createUserWithEmailAndPassword(auth, email, pass)
  .then(()=> {
    updateProfile(auth.currentUser,{
      displayName:localStorage.getItem("username")
    })
    localStorage.setItem("username", username)
  })
      .catch((error)=>{
        alert(error.message)
      } )
  }

 function signout(){
     signOut(auth)
     setUser(null)
     localStorage.clear()
     window.location.href=`${window.location.origin}`
  }
 window.onunload=()=>{
  signOut(auth)
  setUser(null)
 }

return (
  <div>

      {/* <FontAwesomeIcon icon="fa-spinner-third" /> */}
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home clicked={clicked} setselected={setselected} updatepost={Updatepost}  signout={signout} user={users} data={data} setSubtitle={setSubtitle} setTitle={setTitle} printDoc={printDoc} />}></Route>
        <Route path="/forum" element={<Forum/>}></Route>
        <Route path="/login" element={ <Login ChangeUser={<ChangeUser/>} setUsername={setUsername} user={users} signout={signout}  signin={signin} setpass={setpass} setemail={setemail}  />}></Route>
        <Route path="/signup" element={ <Signup  setUsername={setUsername} user={users} signout={signout}  signin={signin} setpass={setpass} setemail={setemail} signUp={signUp}  />}></Route>
        <Route path="/mypost" element={<MyPost updatepost={Updatepost} user={users} data={data} setSubtitle={setSubtitle} setTitle={setTitle} printDoc={printDoc}></MyPost>}/>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
