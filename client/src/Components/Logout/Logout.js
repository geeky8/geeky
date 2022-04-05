import {React,useEffect,useContext} from 'react'
import {useHistory}  from 'react-router-dom'
import { UserContext } from '../../App'
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Logout = () => {
    const {state , dispatch} = useContext(UserContext);

    const history = useHistory();


    useEffect(()=> {
        fetch('/logout' ,{
            method: "GET",
            headers:{
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type:"USER", payload:false})
            toast.warn("You have Logout",{
                position: "bottom-center",
                theme: "dark"
            })
            history.push('/login',{ replace: true});
            if ( res.status  !== 200){
                const error = new Error(res.error);
                throw error 
            }
        }).catch((err) => {
            console.log(err)
        }) 
    });




    return (
        <div>
            <h1>Logout page</h1>
            <ToastContainer draggable={false} transition={Zoom} autoClose={1000} />
        </div>
    )
}

export default Logout;
