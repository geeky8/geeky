import './App.css';
import Login from './Components/LOGIN/Login'
import Test from './Components/LOGIN/register'
import Contact from './Components/ContactUs/ContactUs'
import Home from './Components/Home/Home'
import CourseCard from './Components/CourseCard/CourseCard' 
import MyCourse  from './Components/My Course/mycourse';
import Logout from './Components/Logout/Logout'
import { Route ,Switch, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header'
import React, { createContext , useReducer } from 'react';
import { initialState , reducer  } from './Components/reducer/UseReducer';
import VideoPlaylist from './Components/VideoPlaylist/VideoPlaylist'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './Components/Cart/Cart'
import Service from './Components/Services/Services'
import { CartProvider } from 'react-use-cart'
import 'boxicons'
import Error from './Components/Error/Error';




export const UserContext = createContext();


const Routing = () => {
  return(
    <Switch>

    <Route path="/" exact>
          <Home />
    </Route>
    <Route path="/login" exact>
          <Login />
    </Route>
    <Route path="/mycourse" exact>
          <MyCourse/>
    </Route>
    <Route path="/register" exact>
      <Test />
    </Route>
    <Route path="/contact" exact>
      <Contact />
    </Route >
    <Route path="/services" exact>
      <Service />
    </Route >
    <Route path="/videoplaylist" exact>
      <VideoPlaylist />
    </Route >
    <Route path="/logout" exact>
      <Logout />
    </Route >
    <CartProvider>
      <Route path="/coursecard" exact >
        <CourseCard />
      </Route >
      <Route path="/cart" exact >
        <Cart />
      </Route >
    </CartProvider>
  
    </Switch>

  )
}


const App = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
     <UserContext.Provider value={{state, dispatch}}>
    <Header/>
    <Routing/>
    </UserContext.Provider>
        
    </>
  );
}

export default App;
