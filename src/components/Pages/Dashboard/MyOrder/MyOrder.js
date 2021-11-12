import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import useAuth from '../../../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [myorders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://cryptic-basin-27596.herokuapp.com/order/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyOrders(data);
        })
    },[user.email]);

    let i = 1;

    const handerDelete = async id =>{
        if (window.confirm("Are you sure you want to delete it?")) {
            await fetch(`https://cryptic-basin-27596.herokuapp.com/order/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    updateMyOrder(id);
                }
            })
        }
    }

    const updateMyOrder = (id) =>{
        const remaining = myorders.filter(order => order._id !== id);
        setMyOrders(remaining);
    }


    return (
        <div className="data-table">
            <h2>My Order</h2>
            <div className="table-data">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Order Id</th>
                            <th>Order Details</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            myorders.map(order => {
                                return(
                                    <tr key={order._id}>
                                        <td className="text-center">{i++}</td>
                                        <td>{order._id}</td>
                                        <td>{order.productName}</td>
                                        <td className="text-center">{order.status}</td>
                                        <td className="text-center">
                                            <button onClick={()=>handerDelete(order._id)} className="delete-btn"><MdDelete /></button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;