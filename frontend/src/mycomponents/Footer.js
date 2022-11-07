import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee ,faTrash} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTwitter, faInstagram, faFacebook, faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-brand-svg-icons'
// import{} from '@'
const Footer = () => {
  return (
    <div>
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row mx-4">
      <div className="col-12 col-md">
        <img className="mb-2" src="./images/pro.jpg" alt="" width="68" height="69"/>
        <small className="d-block mb-3 text-muted">Copy-right © 2017–2022</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer> 

    </div>
  )
}

export default Footer
