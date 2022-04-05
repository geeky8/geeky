import React from 'react'
import './mycourse.css'
import axios from 'axios'
import { useCart } from "react-use-cart"
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MyCourse = (props) => {
	const { addItem } = useCart();

	const addItems = () => {
		addItem(props.item) 
		toast.info("Add to Cart Successfully", {
			position: "bottom-center",
			theme: "dark"
		})
	}

    return (
		
		<>
			   <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{width: "300px"}}>
				   <div className="card p-0 overflow-hidden h-100 shadow">
					   <img src={props.img} alt="" className="card-img-top img-fluid" style={{height: "250px", backgroundPosition: "center"}}/>
					   <div className="card-body">
						   <h3 className="card-title">{props.title}</h3>
						   <h5 className="card-text">₹ {props.price}</h5>
						   <p className="card-text">{props.hours}</p>
						   <button className="btn btn-success" onClick={addItems}>Add to Cart</button>
						   <ToastContainer transition={Zoom} autoClose={1000} pauseOnHover={false}/>
					   </div>
				   </div>
			   </div>
			   
		</>
    )
}

export default MyCourse;
