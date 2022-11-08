import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import PreLoaing from './PreLoaing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook,faTwitter,faLinkedin, faBlackTie,} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser,faLock } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
  AOS.init();
    const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
    const [credentialL, setCredentialL] = useState({email:"",password:""});
    const submit=async(e)=>{
        console.log('sumiuu');
e.preventDefault();
let result = await fetch('http://localhost:5000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({email:credentialL.email,password:credentialL.password}),
});
result=await result.json();
console.log(result);
if(result.success){
    setLoading(true);
    localStorage.setItem('token',result.authtoken);
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 1500);
  //  alert('successfully login')
  }
  else{
    alert("wrong email")
  }
    }

    const onchangel=(e)=>{
        setCredentialL({...credentialL,[e.target.name]:e.target.value})
    }
  return (
    <div>
      {Loading?<PreLoaing/>:
<div className='containeri'>
    <div className="forms-container">
      <div className="signin-signup" >
        <form onSubmit={submit} className="sign-in-form formi">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
          <i>
            <FontAwesomeIcon icon={faUser} className="fa-solid "/>
            </i>
            <input type="email" className="form-control input" id="email" name='email' onChange={onchangel} value={credentialL.email} aria-describedby="emailHelp" placeholder='Enter Your Email' required  />
          </div>
          <div className="input-field">
          <i>
            <FontAwesomeIcon icon={faLock} className="fa-solid "/>
            </i>
            <input type="password" className="form-control input" name='password' onChange={onchangel} value={credentialL.password} id="password" placeholder='Enter Your Password' required/>
          </div>
          <button type='submit' className="btni  transparent" id="submit" name='submit'>
            Login
          </button>
          <p className="social-text">Sign-in social platforms</p>
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
         data-aos-duration="800"
     >
          <h3>New_Here?</h3>
          <p>
            If You Visited 1st time KIndly make sure to create Account With Applicable Credentials!
          </p>
          <Link to='/signup'>
          <button className="btni  transparent" id="sign-up-btn">
            SignUp
          </button></Link> 
        </div>
        <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" src="./images/log.svg" className="image" alt="" />
      </div>
    </div>
  </div>
}
    </div>
  )
}

export default Login

