import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const About = () => {
  AOS.init();
  return (
    <div>
      <div className="container0" >
        <div className="containerright" 
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1>Greeting Dear!</h1>
          <p>Hy! My name is <strong style={{ color: 'blue' }}>Mubeen</strong> and I'm a Mern Stack Developer ,I will try my best to become Full Stack Developer. It's Your Welcome to my <strong style={{ color: 'blue' }}>Mern Stack Project</strong> </p>
          <a href="https://api.whatsapp.com/send?phone=+923420398007&text=Hyyy! Mubeen I visited Your Website and Like Your Skills ,Can U work for me..?">
            <button type="button" className="btn btn-lg btnn btn-outline-warning"
            //  onClick={() => { alert('For More Detail Visit My Social Media Accont ') }}
            >Contact Me</button>
          </a>
        </div>
        <div className="containerleft"   
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="700">
          <img src="./images/mian.jpg" className="img" height={'300px'} width='300px' alt="" />
        </div>
      </div>

{/* skillsss______________________________ */}


      <div className="progressing"
       data-aos="zoom-in-up"
     data-aos-easing="linear"
     data-aos-duration="700" style={{ margin: '2rem', marginTop: '7rem' }}>
      <h1 className="text-center" style={{   fontSize: '3rem', fontWeight: 'bolder' }}>My Skills</h1>

        <h1>Html:</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: ' 95%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br />
        <h1>Css:</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: ' 75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br />
        <h1>JavaScript:</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: ' 60%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br />
        <h1>Bootstrap:</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: ' 90%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br />
        <h1>React:</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: ' 87%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br />
        <h1>Mern Stack:</h1>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: ' 75%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br />
        <h1>Full Stack:</h1>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
{/* PRicing------------------------------------ */}

      <div className="container">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center"  data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="700">
      <h1 className="text-center" style={{   fontSize: '3rem', fontWeight: 'bolder' }}>Pricing</h1>
      
      <p class="fs-5 text-muted">Quickly build an effective pricing menu for your potential customers with this Mern Stack example. It’s built with default React Class Based components and utilities with little customization.</p>
    </div>
    </div>



      <div className="container">
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col" 
           data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="700">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-bg-danger">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <Link to="/signup">
                <button type="button" className="w-100 btn btn-lg  btn-outline-danger" >Sign up for free</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col"  data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="700">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-bg-success">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg  btn-outline-success"
                 onClick={() => { alert("Success!You are Connected with us") }}>Get started</button>
              </div>
            </div>
          </div>
          <div className="col"  data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="700">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-warning ">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=+923420398007&text=Hyyy! Mubeen I visited Your Website and Like Your Skills ,Iwant to get this offer and try to work with u,can i do..?">
                <button type="button" className="w-100 btn btn-lg btnn btn-outline-warning">Contact us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>







      <h1 className="text-center" style={{ position: 'relative', top: '6rem', fontSize: '3rem', fontWeight: 'bolder' }}>My Team</h1>

      
      <div className="containertwo">
        <div className="box-item" data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="700">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url(./images/img1.png)' }}>

            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url(./images/img1.png)' }}>
              <div className="inner color-white" >
                <h2 className="flip-box-header">Ismail_Awan</h2>
                <p>Hyy! I'm the One of the best <strong style={{ color: 'blue' }}>APP</strong>  developer</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <button type="button" className="btn btn-lg btnn btn-outline-warning" 
                onClick={() => { alert("Success!You are Connected with us") }}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item" data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="700">
          <div className="flip-box">
            <div className="flip-box-front text-center" style={{ backgroundImage: 'url(./images/img2.png)' }}>

            </div>
            <div className="flip-box-back text-center" style={{ backgroundImage: 'url(./images/img2.png)' }}>
              <div className="inner color-white">
                <h2 className="flip-box-header">Hafiz_Saad</h2>
                <p>Hyy! I'm the One of the best <strong style={{ color: 'blue' }}>Web 3.0</strong> developer</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <button type="button" className="btn btn-lg btnn btn-outline-warning" onClick={() => { alert("Success!You are Connected with us") }}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item" data-aos="zoom-in-up"data-aos-easing="linear"
     data-aos-duration="700">
          <div className="flip-box">
            <div className="flip-box-front text" style={{ backgroundImage: 'url(./images/img3.png)' }}>

            </div>
            <div className="flip-box-back text" style={{ backgroundImage: 'url(./images/img3.png)' }}>
              <div className="inner color-white">
                <h2 className="flip-box-header">Awais Raza</h2>
                <p>Hyy! I'm the One of the best <strong style={{ color: 'blue' }}>Full Stack</strong> developer</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <button type="button" className="btn btn-lg btnn btn-outline-warning" onClick={() => { alert("Success!You are Connected with us") }}>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    
  
    
     
    </div>
   
    
  )
}

export default About