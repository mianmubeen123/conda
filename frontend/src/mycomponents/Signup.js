import React,{useState} from 'react'
import { useNavigate,Link} from 'react-router-dom'
import PreLoaing from './PreLoaing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook,faTwitter,faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser,faLock } from '@fortawesome/free-solid-svg-icons';
const Signup = (props) => {
    const navigate = useNavigate();
    const [credential, setCredential] = useState({name:"",email:"",password:""});
  const [Loading, setLoading] = useState(false);
    const submit=async(e)=>{
e.preventDefault();
const {name,email,password}=credential;
let result = await fetch('http://localhost:5000/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({name,email,password}),
});
result=await result.json();
console.log(result);
if(result.success){
  setLoading(true)
    localStorage.setItem('token',result.authtoken);
    setTimeout(() => {
      setLoading(false)
      navigate('/')
      props.showalert("Welcome To our Project","success")
    }, 1500);
  }
  else if(result.errors){
    alert('Kindly provide valid email')
  }
  else{
    alert("Email Exist")
  }
    }



    const onchange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }
  return (
    <div>
      {Loading?<PreLoaing/>:
    <div className='containeri'>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={submit} className="sign-in-form formi">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
              <i>
            <FontAwesomeIcon icon={faUser} className="fa-solid "/>
            </i>
                <input type="text" className="form-control input" id="name" name='name' onChange={onchange} value={credential.name} aria-describedby="emailHelp"  placeholder='Enter Your Name'required minLength={5}  />
              </div>
              <div className="input-field">
                <i>
            <FontAwesomeIcon icon={faEnvelope} className="fa-solid "/>
            </i>
                <input type="email" className="form-control input" id="email" name='email' onChange={onchange} value={credential.email} aria-describedby="emailHelp" placeholder='Enter Your Email'required  />
              </div>
              <div className="input-field">
              <i>
            <FontAwesomeIcon icon={faLock} className="fa-solid "/>
            </i>
                <input type="password" className="form-control input" name='password' onChange={onchange} value={credential.password} id="password" placeholder='Enter Your Password'required minLength={6}/>
              </div>
              <button type='submit' className="btni  transparent" id="submit" name='submit'>
                Signup
              </button>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
            <a href="https://www.facebook.com" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} className="fa-solid fa-facebook"/>

            </a>
            <a href="https://www.twitter.com" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} className="fa-solid fa-twitter"/>
            </a>
            <a href="https://www.google.com" className="social-icon">
            <FontAwesomeIcon icon={faGoogle} className="fa-solid fa-google"/>
            </a>
            <a href="https://www.linkedin.com" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} className="fa-solid fa-linkedin"/>
            </a>
          </div>
            </form>
           
          </div>
        </div>
    
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content" 
              data-aos="zoom-in-right"
              data-aos-easing="linear"
              data-aos-duration="800">
              <h3>Have_Acc?</h3>
              <p>
               IF You Have An Account?KIndly Find It With Applicable Credentials!!
              </p>
              <Link to='/login'>
          <button className="btni  transparent" id="sign-up-btn">
            Login
          </button></Link>
          
            </div>
            <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" src="./images/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
}
        </div>
  )
}
export default Signup
