import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';


const OrderTable =({orders})=>{
    return(
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
    )

}
export default OrderTable