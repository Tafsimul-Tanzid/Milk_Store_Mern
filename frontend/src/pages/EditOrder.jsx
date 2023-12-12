import React,{useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
const EditOrder =()=>{
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [loading, setLoading]=useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
      setLoading(true);
      axios.get(`http://localhost:8080/orders/${id}`)
      .then((res)=>{
        setName(res.data.name);
        setAmount(res.data.amount);
        setOrderDate(res.data.orderDate);
        setLoading(false);
      }).catch((error)=>{
        setLoading(false);
        alert('An error happend. please Check console');
        console.log(error);
      })
    },[])
    const handleEditOrder =()=>{
       const data ={
        name,
        amount,
        orderDate,
       };
       setLoading(true);
       axios
       .put(`http://localhost:8080/orders/${id}`,data)
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
            <h1 className="text-3xlmy-4">Edit Order</h1>
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
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditOrder}>
                    Update 
                </button>
            </div>
            </div>
    )

}
export default EditOrder