import {React, useState} from 'react'
import { useCart } from 'react-use-cart'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

	const history  =  useHistory();


    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart()

  const loadScript = (src) => {
		return new Promise(res => {
		const script =  document.createElement("script");
		script.src = src;
		script.onload = () => {
		  res(true);
		}
		script.onerror = () => {
		  res(false);
		}
		document.body.appendChild(script);
	   })
	  };
	  
	  const displayRazorpay =  async () => {
		  console.log(items)
		try {
		  const res = loadScript('https://checkout.razorpay.com/v1/checkout.js');
		  if (!res){
			alert("network error");
			return;
		  }
		  const { data } = await axios.post("http://localhost:5000/orders",{amount: cartTotal});
		  if(!data){
			alert("Network Error")
			return;
		  }
		  const {amount,id: order_id, currency } = data;
		  

		  const options = {
			title: items[0].title,
			image: items[0].image,
			key: process.env.RAZOR_KEY,
			amount: amount.toString(),
			currency,
			name: "Corenergy",
			description: "Purchase of Course Package",
			image: "",
			order_id,
			handler: async function(response){
			  const data = {
				title: items[0].title,
				image: items[0].image,
				orderCreationId: order_id,
				razorpayPaymentId: response.razorpay_payment_id,
				razorpayOrderId:  response.razorpay_order_id,
				razorpaySignature: response.razorpay_signature,
				amount :amount,
				currency: "INR",
			  }
			
			  const result = await axios.post('http://localhost:5000/success',data);
			  console.log(result.data);
			  history.push('/')
			},
			prefill: {
			  name: "Lakshmanan",
			  email: "123@gmail.com",
			  contact: "9702576565"
			}
		  }
		  const paymentObject = new window.Razorpay(options);
		  paymentObject.open();
		} catch (error) {
		  console.log(error.message);
		}
	  }
      


	

     if(isEmpty) return <h1 className="text-center" style={{marginTop: "100px"}}> Your Cart is Empty</h1>
	 
    return (
		<>
        <div>
			
           <section className="py-4 container" style={{marginTop: "100px"}}>
               <div className="row justify-content-center">
                   <div className="col-12">
                       <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                       <table className="table table-light table-hover m-0">
                           <tbody>
                           {items.map((item,index) => 
                           <tr key ={index}>
                               <td>
                                   <img src={item.image} alt=""  style={{height: '6rem'}}/>
                               </td>
                               <td>{item.title}</td>
                               <td>₹ {item.price}</td>
                               <td>Quantity ({ item.quantity})</td>
                               <td>
                                   <button className="btn btn-danger ms-2"
                                        onClick={() => removeItem(item.id)}
                                   >   Remove Item
                                   </button>
                               </td>
                           </tr>
                           )}
                           </tbody>
                       </table>
                   </div>
                   <div className="col-auto ms-auto" >
                       <h2 id="totalvalue">Total Price: ₹ {cartTotal}</h2>
                   </div>
                   <div className="col-auto">
                       <button className="btn btn-danger m-2"
                       onClick={() => emptyCart()}
                       >
                           Clear Cart
                       </button>
                       <button className="btn btn-primary"
                       onClick={(e) => displayRazorpay()}
                       >Buy Now</button>
                   </div>
               </div>
           </section>
        </div>
	</>
    )
}



export default Cart
