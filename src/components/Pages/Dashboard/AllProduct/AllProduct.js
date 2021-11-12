import React, { useEffect, useState } from 'react';
import './Allproduct.css';
import { MdDelete } from 'react-icons/md';

const AllProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-basin-27596.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[products])
    let i = 1;

    const handerDelete = async id =>{
        if (window.confirm("Are you sure you want to delete it?")) {
            await fetch(`https://cryptic-basin-27596.herokuapp.com/product/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    updateProduct(id);
                }
            })
        }
    }

    const updateProduct = (id) =>{
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining);
    }


    return (
        <div className="data-table">
            <h2>All Product</h2>
            <div className="table-data">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Short Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            products.map(product => {
                                return(
                                    <tr key={product._id}>
                                        <td className="text-center">{i++}</td>
                                        <td>{product.name}</td>
                                        <td>{product.shortDsc}</td>
                                        <td className="text-center">{product.price}</td>
                                        <td className="text-center">
                                            <button onClick={()=>handerDelete(product._id)} className="delete-btn"><MdDelete /></button>
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

export default AllProduct;