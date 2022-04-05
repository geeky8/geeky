import {React, useState,useEffect} from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom';
import Bg from './images/bg.jpg'

const Home = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});
    const [show , setShow] = useState(false);

    const callHomePage = async () => {
      try {
        const res =  await fetch ("/contact", {
          method: "GET",
          headers: {
            Accept: 'appllication/json',
            "Content-Type": "application/json",
          },
          credentials: "include"
        });
        const data =  await res.json()
        setUserData(data);
        setShow(true)
  
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
      callHomePage();
    }, []);



    return (
        <div>
           <img src={Bg} alt="" className="homebg"/>
            <h1 className="homeh1">Welcome to Corenergy Fitness World</h1>
            <h2 className="homeh3">{userData.fullname}</h2>
         
        </div>
    )
}

export default Home
