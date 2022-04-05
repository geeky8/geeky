import { React, useState } from 'react'
import More from "./more.jpg"
import { Link ,useHistory} from 'react-router-dom'
import './Test.css';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Test = () => {
    const history = useHistory();

    const [user,  setUser] = useState({
        fullname: "" ,username: "", email: "", password: "", cpassword: ""
    });
    let name, value;

    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    const PostData = async (e) =>{
        e.preventDefault();
        const {fullname,username, email ,password, cpassword} = user;

        const res = await fetch("/register", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname,username,email,password,cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            toast.warn("Invalid registration",{
                position: "bottom-center",
                theme: "dark"
            })
            // window.alert("Invalid registration")
        } else {
            console.log(res.status)
            window.alert("Registration Successful")
            history.push('/');
        }
    }

    
    return (
        <> 
            <section className="section">
                <div className="container">
                    <div className="user signupBx">
                        <div className="formBx" >
                            <form method="POST" autoComplete="off">
                                <h2>Create an account</h2>
                                <input type="text" placeholder="Full Name" name="fullname" 
                                 value={user.fullname}
                                 onChange={handleInput}/>
                                <input type="text"  placeholder="Username" name="username" 
                                 value={user.username}
                                 onChange={handleInput}/>
                                <input type="text"  placeholder="Email Address"  name="email"
                                value={user.email}
                                onChange={handleInput}/>
                                <input type="password" placeholder="Create Password" name="password"
                                value={user.password}
                                onChange={handleInput}/>
                                <input type="password" placeholder="Confrim Password" name="cpassword"
                                value={user.cpassword}
                                onChange={handleInput}/>
                                <input type="submit" onClick={PostData} defaultValue="Sign Up" />
                                <ToastContainer transition={Zoom} autoClose={1500} pauseOnHover={false}/>
                                <p className="signup">Already have an account? <Link to="/login"> Sign In.</Link></p>
                            </form>
                        </div>
                        <div className="imgBx">
                            <img src={More} alt="Less"></img>
                        </div>
                    
                    </div>
                </div>
            </section >
        </>
    )
}

export default Test