import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [massage, setMassage] = useState('');

    const onSubmit = data => {
        fetch('https://cryptic-basin-27596.herokuapp.com/product',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                reset()
                setMassage('Product insert Successfully.');
            }else{
                setMassage('Product not inserted.');
            }
        });
    };

    return (
        <div className="product-add">
            <h2>Add Product</h2>
            {
                massage && <p>{massage}</p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name", { required: true })} placeholder="Product Name*"/>
                <input {...register("shortDsc", { required: true })} placeholder="Product Short Description*" />
                <input type="number" {...register("price", { required: true })} placeholder="Product Price*" />
                <input type="url" {...register("image", { required: true })} placeholder="Image URL*" />
                
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;