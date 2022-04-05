import React,{useContext} from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../../App'
import { useCart  } from 'react-use-cart'


export const Header = () => {
    const {state , dispatch} = useContext(UserContext);

    const RenderMenu = () => {

        const {totalItems } = useCart()
        if(state){
            return(
                <>
                  <li className="headerli"><NavLink to="/" className="nav-link-header">Home</NavLink></li>
                    <li className="headerli"><NavLink to = '/coursecard' className="nav-link-header">Course</NavLink></li>
                    <li className="headerli"><NavLink className="nav-link-header" to='/services'>Services</NavLink></li>
                    <li className="headerli"><NavLink className="nav-link-header" to='/contact'>Contacts</NavLink></li>
                    <li className="headerli"><NavLink className="nav-link-header" to='/mycourse'>My Course</NavLink></li>
                    <li className="headerli"><NavLink to="/cart" className="nav-link-header">My Cart</NavLink></li>
                    <li className="headerli"><NavLink to="/logout" className="nav-link-header">Logout</NavLink></li>
                </>
            )
        }else{
            return(
                <>
                <li className="headerli"><NavLink to="/" className="nav-link-header">Home</NavLink></li>
                <li className="headerli"><NavLink to = '/coursecard' className="nav-link-header">Course</NavLink></li>
                <li className="headerli"><NavLink className="nav-link-header" to='/services'>Services</NavLink></li>
                <li className="headerli"><NavLink className="nav-link-header" to='/contact'>Contacts</NavLink></li>
                <li className="headerli"><NavLink to="/login" className="nav-link-header">Login</NavLink></li>
               </>
               
            )
        }

    }

    window.addEventListener("scroll",function(){
        var header = document.getElementById("header");
        header.classList.toggle("sticky",window.scrollY > 0);
    })
    
    return (
        <div className="headerdiv"> 
            <header id="header">
                <a href="#" className="logo">Corenergy</a>
                <ul className="headerul">
                  <RenderMenu/>
                </ul>
            </header>
            {/* <section className="banner"></section> */}
        </div>
    )
}

export default Header;
