import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-basin-27596.herokuapp.com/order')
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    },[orders]);
    
    let i = 1;

    const handerDelete = async id =>{
        if (window.confirm("Are you sure you want to delete it?")) {
            await fetch(`https://cryptic-basin-27596.herokuapp.com/order/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    updateOrder(id);
                }
            })
        }
    }

    const updateOrder = (id) =>{
        const remaining = orders.filter(order => order._id !== id);
        setOrders(remaining);
    }

    const handerAproved = async id =>{
        if (window.confirm("Are you sure you want to Update it?")) {
            await fetch(`https://cryptic-basin-27596.herokuapp.com/order/${id}`,{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({'status':'Shipped'})
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    setOrders(['']);
                }
            })
        }
    }


    return (
        <div className="data-table">
            <h2>All Order</h2>
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
                            orders.map(order => {
                                return(
                                    <tr key={order._id}>
                                        <td className="text-center">{i++}</td>
                                        <td>{order._id}</td>
                                        <td>{order.productName}
                                        </td>
                                        <td className="text-center">
                                            {
                                            (order.status === 'Pending') ? <button  onClick={()=>handerAproved(order._id)} >Pending</button>:'Shipped'
                                            }
                                        </td>
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

export default AllOrder;