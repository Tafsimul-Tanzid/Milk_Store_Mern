import {Link} from 'react-router-dom';
import {PiOrderOpenTextLight} from 'react-icons/pi';
import {BiUserCircle} from 'react-icons/bi';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import { MdOutlineDelete} from 'react-icons/md';


const OrderCard =({orders})=>{
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orders.map((item)=>(
                <div key={item._id}
                className=''>

                </div>
            ))}
        </div>
    )

}
export default OrderCard