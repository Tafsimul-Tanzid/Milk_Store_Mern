import React,{useEffect, useState} from "react";
import axios from 'axios';
import Spinner from "../components/Spinner";
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

const Home =()=>{
    const [orders, setOrders]=useState([]);
    const [loading, setLoading]=useState(false);
    useEffect(()=>{
     setLoading(true);
     axios
     .get('http://localhost:8080/orders')
     .then((res)=>{
        setOrders(res.data.data);
        setLoading(false);
     })
     .catch((error)=>{
        console.log(error);
        setLoading(false);
     });
    },[]);
    return(
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Orders List</h1>
                <Link to='/orders/create'>
                    <MdOutlineAddBox className="text-sky-800 text-4xl"/>
                </Link>
            </div>
            {loading?(
                <Spinner/>
            ):(
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                        <tr>
                        <th className="border border-slate-600 rounded-md">No</th>
                        <th className="border border-slate-600 rounded-md">Name</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">Amount</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">Order Date</th>
                        <th className="border border-slate-600 rounded-md ">Operations</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order,index)=>(
                            <tr key={order._id} className="h-8">
                                <td className="border border-slate-700 rounded-md text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center">
                                    {order.name}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                    {order.amount}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                    {order.orderDate}
                                </td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                                    <div className="flex justify-center gap-x-4">
                                        <Link to ={`/orders/details/${order._id}`}>
                                            <BsInfoCircle className="tex-2xl text-green-800"/>

                                        </Link>
                                        <Link to ={`/orders/edit/${order._id}`}>
                                            <AiOutlineEdit className="tex-2xl text-yellow-600"/>
                                            
                                        </Link>
                                        <Link to ={`/orders/delete/${order._id}`}>
                                            <MdOutlineDelete className="tex-2xl text-red-600"/>
                                            
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                    

               
            )}
        </div>
    )

}
export default Home