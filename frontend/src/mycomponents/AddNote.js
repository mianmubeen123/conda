import React,{useContext,useState} from 'react'
import NoteContext from '../context/NoteContext'
const AddNote = (props) => {
    const context=useContext(NoteContext);
    const {addnote}=context; 
    const [note, setNote] = useState({title:"",description:"",tag:""});
    const submit=(e)=>{
        addnote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.showalert("Your note has been added","!Success")
        document.getElementById('title').value="";
        document.getElementById('description').value="";
        document.getElementById('tag').value="";
        e.preventDefault();
}
const changing=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
        e.preventDefault();
    }

    
  return (
    <div className="container">
    <div className="my-3 noteCard">
        <form onSubmit={submit} >
        <h1  className="h1">Welcome To Component Save App</h1>
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <h5 className="card-title lin">Product Name</h5>
                    <input type="text" className="form-control" id="title" onChange={changing} name='title' aria-describedby="title" required minLength={3}/>
                </div>
                <h5 className="card-title lin">Product Price</h5>
                <div className="form-group">
                    <input className="form-control" id="description" onChange={changing} name='description' required minLength={3}></input>
                </div>
                <h5 className="card-title lin">Product Category</h5>
                    <input type="text" className="form-control" id="tag" onChange={changing} name='tag' aria-describedby="tag"
                     required minLength={3}/>
       <button className="btn btn-lg btn-success mt-4" type='submit' id="addBtn">Add Product</button>
            </div>
        </div>
        </form>
        </div>
    </div>
  )
}

export default AddNote
