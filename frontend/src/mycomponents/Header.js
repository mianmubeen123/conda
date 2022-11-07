import React ,{useEffect}from 'react'
import { Link,useLocation ,useNavigate} from 'react-router-dom'
// import Pic from"./mycomponents/download.jpeg"
const Header = () => {
  const navigate = useNavigate();
  let location=useLocation();
  useEffect(() => {
 console.log(location.pathname);
  }, [location]);
  const clearLocal=()=>{
    // localStorage.clear();
    // alert('soch lo')
    navigate('/login')
    localStorage.removeItem('token');
  }
  return (
    <div>
      <nav className="navbar navi navbar-expand-lg  bg-light">
            <div className=" text-uppercase  container-fluid">
              <Link  to="#" >
                <img   src="./images/pro2.jpg" alt="" width="55" height="55" className="d-inline-block align-text-top imgi"  />
            </Link>
              <Link className="navbar-brand ms-3 mb-1.5 head texti" to="#" >You'll be a Coder</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " ></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {localStorage.getItem('token')?
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-11">
                
                  <li className="nav-item ">
                    <Link className="nav-link " style={{color:`${location.pathname==="/"? "black":""}`}} to="/">Home</Link>
                  </li> 
                   <li className="nav-item">
                    <Link className="nav-link"  style={{color:`${location.pathname==="/text"? "black":""}`}}to="text">TextUtils</Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link"  style={{color:`${location.pathname==="/about"? "black":""}`}}to="/about">About</Link>
                  </li>
                <li className="nav-item"><Link className="nav-link" to="/login" onClick={clearLocal}>Logout</Link></li>
                </ul>
                :
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-11 right">
                   <li className="nav-item">
                    <Link className="nav-link"  style={{color:`${location.pathname==="/about"? "black":""}`}}to="/about">About</Link>
                  </li>
                <li className="nav-item"><Link className="nav-link" to="/signup">SignUp</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link></li>
                </ul>
    }   
              </div>
            </div>
          </nav>

    </div>
  )
}

export default Header
