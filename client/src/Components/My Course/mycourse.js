import {React, useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Services = () => {

    const history = useHistory();

    const [orders, setOrders] = useState([]);
    
    async function fetchOrders() {
        const {data}  = await axios.get('/list-orders');
        setOrders(data);
    }
    useEffect(() => {
        fetchOrders();
    }, []);

    async function deleteOrder() {
        const {data}  = await axios.delete('/delete-order');
        console.log(data)
    }

    return (
        <div className="container mt-5">
            <div className="mt-130" style={{marginTop: "100px"}}></div>
            {orders.map((y) =>
              <>
            <div className="card mt-5" style={{borderRadius: "10px", overflow:"hidden"}}>
                <div className="row">
                    <div className="col-md-4" style={{textAlign: "center"}}>
                        <img src={y.image} alt="" className="img-fluid"  style={{maxHeight:"150px", width: "100%", backgroundPosition: "center"}}/>
                    </div> 
                    <div className="col-md-8" key={y._id}>
                            <h2 className="card-title mt-3">{y.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rerum.</p>
                            <button className="btn btn-primary" onClick={() => {history.push('/videoplaylist')}}>Start Course</button>      
                            <button className="btn btn-danger" style={{marginLeft: "50px"}} onClick={deleteOrder}>Exit Course</button>                      
                    </div>

                   
                    
                </div>
            </div>  
            </>
         )} 
        </div>
    )
}

export default Services
