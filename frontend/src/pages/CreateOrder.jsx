import React,{useState} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const CreateOrder =()=>{
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [loading, setLoading]=useState(false);
    const navigate = useNavigate();
    const handleSaveOrder =()=>{
       const data ={
        name,
        amount,
        orderDate,
       };
       setLoading(true);
       axios
       .post(`http://localhost:8080/orders`,data)
       .then(()=>{
        setLoading(false);
        navigate('/');
       })
       .catch((error)=>{
        setLoading(false);
        alert('An error happend. please Check console');
        console.log(error);
       })
    };
    return(
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3xlmy-4">Create Order</h1>
            {loading ? <Spinner/> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Name</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Amount</label>
                    <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Order Date</label>
                    <input
                    type="number"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleSaveOrder}>
                    Save
                </button>
            </div>
            </div>
    )

}
export default CreateOrder