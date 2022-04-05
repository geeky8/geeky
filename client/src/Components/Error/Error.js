import React from 'react'
import './Error.css'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
    const history = useHistory()

    const Fun = () => {
       toast.success("Successfully",{
           position: "bottom-center"
       })
    }
    return (
        <div>
            <div className="container-fluid" style={{marginTop: "120px"}}>
                <h1 style={{textAlign: "center", fontSize: "100px" , fontWeight: "bolder"}}>404 </h1> 
                <h4 style={{textAlign: "center", fontWeight: "bold"}}>PAGE NOT FOUND</h4>
                <button type="button" class="btn btn-outline-primary" style={{marginLeft: "610px", marginTop: "20px", borderColor: "#000",border: "none"}} onClick={() => history.push('/')}>Back to Home</button>
                <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
                <button type="button" class="btn btn-outline-primary"  onClick={Fun}>Back to Home</button>

            </div>
        </div>
    )
}

export default Error
