import React,{useContext,useEffect,useRef,useState} from 'react'
import NoteContext from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'
import AddNote from './AddNote';
import NoteItem from './ProductItem';
import Spinner from './Spinner';
const notes = (props) => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
    const context=useContext(NoteContext);
    const {notes,getnote,editnote}=context; //destructuring it means context.notes,
    useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/')
      setLoading(true);
      getnote();
      setTimeout(() => {
        
        setLoading(false);
      }, 2000);
      // eslint-disable-next-line
    }else{
      navigate('/login')
    }
      
      // eslint-disable-next-line
    }, []);
    const [product, setProduct] = useState({ename:"",eprice:"",ecategory:""});
    const ref = useRef(null)
    const refclose = useRef(null)

    const updatenote=(currentproduct)=>{
      // console.log(currentnote);
      ref.current.click();
      setProduct({id:currentproduct._id,ename:currentproduct.name,eprice:currentproduct.price,ecategory:currentproduct.category})
    }

    const changing=(e)=>{
      setProduct({...product,[e.target.name]:e.target.value})
    }
    
    const submit=(e)=>{
      // console.log('updates and new is',note)
      editnote(product.id,product.ename,product.eprice,product.ecategory)
      ref.current.click();
      props.showalert("Your Note Has Been Updated Successfully","!Success")  
  }
  return (
    <>
     <AddNote showalert={props.showalert}/>
      <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{visibility:'hidden'}}>
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-name fs-5" id="exampleModalLabel" style={{position:'relative', right:'17rem',color:'red'}}>Edit_Your_Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <h5 className="card-name lin">Product Name</h5>
                    <input type="text" className="form-control" id="ename" value={product.ename} onChange={changing} name='ename' aria-describedby="ename" placeholder="Enter name Atleast 5 characters"/>
                </div>
                <h5 className="card-name lin">Product Price</h5>
                <div className="form-group">
                    <input className="form-control" id="eprice"  value={product.eprice}onChange={changing} name='eprice' placeholder='Enter price Atleast 5 characters' rows="3"></input>
                </div>
                <h5 className="card-name lin">Product Category</h5>
                    <input type="text" className="form-control" id="ecategory" value={product.ecategory} onChange={changing} name='ecategory' aria-describedby="ecategory"
                        placeholder="Enter category Atleast 3 characters"/>
            </div>
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" ref={refclose} className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  disabled={product.eprice.length<2||product.ename.length<3||product.ecategory.length<3} onClick={submit}>Updatenote</button>
      </div>
    </div>
  </div>
</div>
<hr/>
        <h1 className="h1">Your Products</h1>
        <hr/>
        {Loading ? <Spinner/>:
<div className="resp">
        <div id="notes" >
          <ul className='list'>
            <li>S.NO</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Date</li>
            <li>Update/Delete</li>
          </ul>
          <div className="container">
            {notes.length===0 && <h1 className="h1" >There Is No Item! to Display</h1>}
          </div>
{console.log(notes.length)}
         { notes.map((product,index)=>{
          return <NoteItem key={product._id} index={index} showalert={props.showalert} updatenote={updatenote} product={product}/>
            })}
            </div>
    </div>
}
    </>
  )
}

export default notes
