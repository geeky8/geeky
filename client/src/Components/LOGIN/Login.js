import {React ,useContext,useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import Less from "./less.jpg";
import "./Login.css";
import { UserContext } from '../../App'
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const {state , dispatch} = useContext(UserContext);

  const history = useHistory(); 
  const [username, setUsername] = useState('');
  const [password ,setPassword] = useState('');
  


const Login = async (e) =>{
   e.preventDefault();
   const res = await fetch('/login', {
     method:"POST",
     headers:{
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       username,
       password
     })
   });

   const data  = await res.json();

   if(res.status === 400 || !data){
    toast.warn("Invalid Credentials", {
      position: "bottom-center",
      theme: "dark"
    })
    //  window.alert("Invalid Credentials")
   }
  else{
    dispatch({ type:"USER", payload:true})
    //  window.alert("Login Successfully")
     history.push('/')
   }

 
}


  return (
    <>
      <section className="section">
        <div className= "container" >
          <div className="user signinBx">
            <div className= "imgBx">
              <img src={Less} alt="Less"></img>
            </div>
            <div className= "formBx">
              <form method="POST">
                <h2>Sign In</h2>
                <input type="text" autoComplete="off" placeholder="Username"  name="username"
                value={username.username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" autoComplete="off" placeholder="Password" name="password" 
                value={password.password}
                onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" defaultValue="Login"  onClick={Login}/>
                <ToastContainer transition={Zoom} autoClose={1000} pauseOnHover={false}/>
                <p className="signup">
                  Don't have an account? <Link to ="/register"> Sign up </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
