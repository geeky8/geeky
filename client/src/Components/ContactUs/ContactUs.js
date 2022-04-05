import {React ,useEffect, useState} from "react";
import "./ContactUs.css";
// import Logo from '../Header/logo.png'
import {useHistory} from "react-router-dom"
import Location from "E:/Payment Gateway/client/src/Components/ContactUs/Images/location.png"
import Mail from "E:/Payment Gateway/client/src/Components/ContactUs/Images/mail.png"
import Phone from "E:/Payment Gateway/client/src/Components/ContactUs/Images/phone.png"
// import Twitter from "E:/Payment Gateway/client/src/Components/ContactUs/Images/twitter.png"



const ContactUs = () => {

  const history = useHistory();
  const [userData, setUserData] = useState({fullname: "", email:"",message:""});
  const callContactPage = async () => {
    try {
      const res =  await fetch ("/getdata", {
        method: "GET",
        headers: {
          Accept: 'appllication/json',
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const data =  await res.json()
      console.log(data)  
      setUserData({...userData, fullname:data.fullname,email:data.email});

      if( !res.status === 200){
        const error =  new Error(res.error)
        throw error
      }
    } catch (error) {
      console.log(error);
      history.push('/');
    }
  }




  useEffect(() => {
    callContactPage();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value});
  }

  const contactForm = async (e) => {
    e.preventDefault()

    const { fullname, email, message } = userData;

    const res = await fetch('/contact', { 
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname,email, message
      })
    });
    const data = await res.json();
    if (!data){
      console.log("Message not Send");
    }else{
      alert("Message Send")
      setUserData({...userData, message: ""})
    }
  }
 


  return (
    <>
    <section className="section1 margin400">
      <div className="container1">
        <div className="contactinfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li className="contactli">
                <span>
                  <img  alt="location" src={Location} />
                </span>
                <span>
                 3, KA Subramanyam Rd <br />
                  Navi Mumbai, MH <br />
                  400706
                </span>
              </li>
              <li className="contactli">
                <span>
                  <img  alt="mail" src={Mail} />
                </span>
                <span>Corenergy@gmail.com</span>
              </li>
              <li className="contactli">
                <span>
                  <img alt="phone" src={Phone} />
                </span>
                <span>310-386-1623</span>
              </li>
            </ul>
            </div>
            <ul className="sci">
              <li className="contactli">
                <a href="#">
                <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li className="contactli">
                <a href="#">
                <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li  className="contactli">
                <a href="#">
                <i class="fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="contactli">
                <a href="#">
                <i class="fab fa-pinterest"></i>
                </a>
              </li >
              <li className="contactli">
                <a href="#">
                <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          
        </div>
        <div className="contactform">
          <h2>Send a Message</h2>
          <form className="formBx" action="POST">
            <div className="inputBox w50">
              <input type="text" name="fullname" required 
              value ={userData.fullname}
              onChange={handleInput}/>
              <span>Full Name</span>
             
            </div>
            {/* <div className="inputBox w50">
              <input type="text" name="" required 
              value ={userData.username}
              onChange={handleInput}/>
              <span>Last Name</span>
              
            </div> */}
            <div className="inputBox w50">
              <input type="text" name="email" required 
              value={userData.email} 
              onChange={handleInput}/>
              <span>Email Address</span>
              
            </div>
            <div className="inputBox w100">
              <textarea name="message" id="" required
                value={userData.message}
               onChange={handleInput}></textarea>
              <span>Write a Message here...</span>
             
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" onClick={contactForm}/>
            </div>
          </form>
        </div>
      </div>
    </section>
    {/* <footer>
      <div className="row">
        <div className="col">
          <img  alt="logo" className="logo" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Iure ipsam, rem odio et maiores asperiores ex accusantium maxime pariatur 
             dignissimos minima iusto recusandae. Magni, adipisci facere recusandae cupiditate 
             doloribus illum!</p>
        </div>
        <div className="col">
          <h3>Office <div className="underline"><span></span></div></h3>
          <p>90 Feet Road</p>
          <p>Dharavi, Mumbai</p>
          <p>Maharashtra PIN 400706 India</p>
          <p className="email-id">lorem@gmail.com</p>
          <h4>+91 - 9702575656</h4>
        </div>
        <div className="col">
          <h3>Links <div className="underline"><span></span></div></h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact US</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="underline"><span></span></div></h3>
          <form className="emailform" >
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit"><i className="fas fa-arrow-right"></i></button>
          </form>
          <div className="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-github"></i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Corenergy GYM &copy; 2021 - All Rights Reserved </p>
    </footer> */}
    </>
  );
};

export default ContactUs;
