import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Sections/Banner/Banner';
import './CheckOut.css';

const CheckOut = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useAuth();
    const history = useHistory();
    const peram = useParams();
    const productID = peram.id;

    const [product, setProduct] = useState([]);
    
    useEffect(()=>{
        fetch(`https://cryptic-basin-27596.herokuapp.com/product/${productID}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
        .catch(error => {
            if (error) {
                history.push('/');
            }
        });
    },[history,productID]);

    /**
     * handel order
     * @param {*} data recive form data
     */
    const onSubmit = async data => {
        await fetch('https://cryptic-basin-27596.herokuapp.com/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                history.push('/thankyou');
            }
        });
    };

    return (
        <main>
            <Banner pageName="Checkout"></Banner>
            <section className="section-p">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="check-out">
                                    <div className="check-details">
                                        <div className="check-title">
                                            <h3>Your Details</h3>
                                        </div>
                                        <div className="check-form">
                                            <div className="row">
                                                <div className="col-12">
                                                    <input type="text" {...register("name", { required: true })} value={user.displayName} readOnly/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" {...register("email", { required: true })} value={user.email} readOnly/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" {...register("address", { required: true })} placeholder="Address*"/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" {...register("city", { required: true })} placeholder="City*"/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" {...register("state", { required: true })} placeholder="State*"/>
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" {...register("postalCode", { required: true })} placeholder="Postal Code*"/>
                                                </div>
                                                <input type="hidden" {...register("productId", { required: true })} value={productID}/>
                                                <input type="hidden" {...register("status", { required: true })} value="Pending"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="product-price-part">
                                    <div className="check-title">
                                        <h3 className="text-center">Product Details</h3>
                                    </div>
                                    <div className="checkoutProduct-details">
                                        <img src={product[0]?.image} alt="" />
                                        {
                                            product[0]?.image && <input type="hidden" {...register("productImage", { required: true })} defaultValue={product[0].image}/>
                                        }
                                        

                                        <h3>{product[0]?.name}
                                        {
                                            product[0]?.name && <input type="hidden" {...register("productName", { required: true })} value={product[0].name}/>
                                        }
                                        </h3>

                                        <p>${product[0]?.price}
                                        {
                                            product[0]?.price && <input type="hidden" {...register("productprice", { required: true })} value={product[0].price}/>
                                        }
                                        </p>

                                        <div className="check-out-btn">
                                            <input type="submit" className="btn" value="Order Now"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CheckOut;