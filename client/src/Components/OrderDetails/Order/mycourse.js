import {React,useState, useEffect} from 'react'
import axios from 'axios'
import './mycourse.css'

export const MyCourse = () => {

    const [orders, setOrders] = useState([]);
    
    async function fetchOrders() {
        const {data}  = await axios.get('/list-orders');
        setOrders(data);
    }
    useEffect(() => {
        fetchOrders();
    }, []);


    return (
        <div>
            {/* <h1 className="myh1">No Course is Added</h1> */}
            <table class="table table-hover" style={{marginTop: "100px"}}>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col">ISPAID</th>
                    <th scope="col">RAZORPAY</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((x) =>
                    <>
                        <tr key={x._id}>
                            <th scope="row">{x._id}</th>
                            <td>{x.amount}</td>
                            <td>{x.isPaid ? "YES" : "NO"}</td>
                            <td>{x.razorpay.paymentId}</td>
                        </tr>
                    </>
                    )}
                  
                </tbody>
            </table>
        </div>
    )
}

export default MyCourse;