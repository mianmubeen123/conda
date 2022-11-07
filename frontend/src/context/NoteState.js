import React from "react";
import { useState } from "react";
import NoteContext from './NoteContext'
 const NoteState=(props)=>{
//    const s1={
//       name:"mian",
//       age:"20"
//     }
//    const update=()=>{
    //     setTimeout (() => {
//         setstate({
//             "name":"mubeen",
//             "age":"20.2"
//         })
//     }, 2000);
// value={{state:state,update:update}}
const notesintial=[
]
const demo=[]
const [notes, setNotes] = useState(notesintial);//we make object and than set its values we use single s1 ,update

const  getnote=async()=>{
    let result = await fetch('http://localhost:5000/fetchnotes', {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          auth_token:localStorage.getItem('token')
        }
      })
      result=await result.json();
      console.log(result.result)
    if(result.success){
        setNotes(result.result);
    }
    else{
        setNotes(demo);
    }
console.log("nothing to show ",notes.length)
}

const addnote=async(name,price,category)=>{

    let result = await fetch('http://localhost:5000/addnotes', {
        method: 'post',
        body: JSON.stringify({ name,price,category}),
        headers: {
          'Content-Type': 'application/json',
          auth_token:localStorage.getItem('token')
        }
      })
      result = await result.json();
      if(result.success){
          
      }
      console.log(result)
setNotes(notes.concat(result.savenote))
}



const editnote=async(id,name,price,category)=>{
    let url=`http://localhost:5000/updatenotes/${id}`
const responce=await fetch(url,{
   method:'put',
   headers:{
    'Content-Type':'application/json',
    'auth_token':localStorage.getItem('token')
   },
   body:JSON.stringify({name,price,category})
})
const result=await responce.json();
//logic to edit a note 
console.log('editied note ',result);
let newnotes=JSON.parse(JSON.stringify(notes));
for (let index = 0; index < newnotes.length; index++) {
    const element = newnotes[index];
    if(element._id===id){
newnotes[index].name=name;
newnotes[index].price=price;
newnotes[index].category=category;
break;
    }
}
setNotes(newnotes)
// getnote();
}



const deletenote=async(id)=>{
    let result = await fetch(`http://localhost:5000/deletenotes/${id}`, {
        method: 'delete',
        headers:{
          auth_token:localStorage.getItem('token')
          }
      });
      if(result.success)
      {
        // alert("successfully deleted")
    //   getproduct();
    }

const newnote=notes.filter((note)=>{return note._id!==id});
setNotes(newnote);
}
    return (

        <NoteContext.Provider value={{notes,getnote,addnote,editnote,deletenote}} >
         {props.children}
        </NoteContext.Provider>
      );
    
 }
 export default NoteState