import { useState,useEffect } from 'react';
import './App.css';
import {db} from './firebase-config';
import {addDoc, collection,getDocs, updateDoc,doc, deleteDoc} from "firebase/firestore";
import { async } from '@firebase/util';

function App() {
  const [newname,setnewname]=useState("");
  const [newage,setnewage]=useState(0)
  const [users,setUsers] =useState([])  
  const usersCollectionRef=collection(db,"users")
  //add user
  const createuser=async()=>{
  await addDoc(usersCollectionRef,{name:newname,age:Number(newage)})
  }
  //update 
  const updateage=async(id,age)=>
  {
    const userDoc=doc(db,"users",id)
    const newfields={age:age+1}
    await updateDoc(userDoc,newfields)
  }

  //delete
  const deleteuser=async(id)=>{
    const userDoc=doc(db,"users",id)
    await deleteDoc(userDoc)
  }
 

  //useEffect for displaying
  useEffect(()=>{
 
    const getUsers = async()=>{
    const data =await getDocs(usersCollectionRef);
   setUsers(data.docs.map((doc)=>({...doc.data() ,id:doc.id})));

    }
    getUsers()
  },[])
  

  return (
    <div className="App">
      
    <input type="text" placeholder="enter name.." onChange={(event)=>{setnewname(event.target.value)}}/>
    <input type="number" placeholder="enter age.." onChange={(event)=>{setnewage(event.target.value)}}/>
    <button onClick={createuser}>add user</button>
    {" "}
    {users.map((user)=>
    {
      return <div>
        <h1>
          NAME:{user.name}
        </h1>
        <h1>Age:{user.age}</h1>
        <button onClick={()=>{updateage(user.id,user.age)}}> icreament age</button>   

        <button onClick={()=>{deleteuser(user.id)}}>{""}Delete user</button>
        </div>
    })}
    
    </div>
  );
}

export default App;
