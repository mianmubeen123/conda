import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'
const NoteItem = (props) => {
    const {product,updatenote,index}=props
    const {deletenote}=useContext(NoteContext);
    const deletefunc=()=>{
       deletenote(product._id)
       props.showalert("Your Product Has Been Deleted Successfully","!Danger")  
    }
  return (
    <>
     <ul className='list2'>
            <li>{index+1}</li>
            <li>{product.name}</li>
            <li>{product.price}</li>
            <li>{product.category}</li>
            <li>{product.date}</li>
            <li>
            <FontAwesomeIcon icon={faTrash} className="fa-solid fa-trash "  onClick={deletefunc}/>
                        < FontAwesomeIcon icon={faEdit} className="fa-solid fa-edit mx-2" onClick={()=>{updatenote(product)}} />
            </li>
          </ul>

 </>
                
  )
}

export default NoteItem
