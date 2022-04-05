import {React, useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './Service.css'
import 'boxicons'


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
        <div className = "wrapper">
        <h1 className="serviceh1">Our Services</h1>
        <div className = "content-box">
            <div className = "cardservice">
                {/* <i className = "bx bx-bar-chart-alt bx-md"></i> */}
                <box-icon name='user'></box-icon>
                <h2 className="serviceh2">Weight Loss</h2>
                <p> Weight loss is a decrease in body weight resulting from either voluntary (diet, exercise) or involuntary (illness) circumstances.</p>
            </div>
            <div className = "cardservice">
                {/* <i className = "bx bx-laptop bx-md"></i> */}
                <box-icon name='body'></box-icon>
                <h2 className="serviceh2">Aerobic</h2>
                <p>Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness</p>
            </div>
            <div className = "cardservice">
                {/* <i className = "bx bx-line-chart bx-md"></i> */}
                <box-icon type='solid' name='label'></box-icon>
                <h2 className="serviceh2">Execises</h2>
                <p>Exercise is physical activity that is planned, structured, and repetitive for the purpose of conditioning the body.</p>
 
            </div>
            <div className = "cardservice">
                {/* <i className = "bx bx-mail-send bx-md"></i> */}
                <box-icon name='health' ></box-icon>
                <h2 className="serviceh2">Health </h2>
                <p>Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity</p>
            </div>
            <div className = "cardservice">
                {/* <i className = "bx bx-bar-chart-alt bx-md"></i> */}
                <box-icon name='run'></box-icon>
                <h2 className="serviceh2">Training</h2>
                <p>A Fitness Trainer creates tailored fitness and wellness plans for individuals and groups</p>
            </div>
            <div className = "cardservice">
                {/* <i className = "bx bx-paint bx-md"></i> */}
                <box-icon name='trip-advisor' type='logo' ></box-icon>
                <h2 className="serviceh2">Smart Advice</h2>
                <p>A Smart Advice is a carefully planned, clear and trackable objective. It stands for Specific, Measurable, Achievable, Relevant and Time-Based.</p>
            </div>
        </div>
    </div>
    )
}

export default Services
