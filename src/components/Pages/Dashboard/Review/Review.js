import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const [massage, setMassage] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch('https://cryptic-basin-27596.herokuapp.com/review',{
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
                setMassage('Review insert Successfully.');
            }else{
                setMassage('Review not inserted.');
            }
        });
    };


    return (
        <div className="review">
            <h2>Review</h2>
            {
                massage && <p>{massage}</p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name*" />
                <input {...register("destination", { required: true })} placeholder="Destination*" />
                <input type="number" {...register("rating", { required: true, min: 0, max: 5 })} placeholder="Rating*" />
                {errors.rating && <span style={{color:"red"}}>Rating value should be 0 to 5!</span>}
                <textarea {...register("massage", { required: true })} placeholder="Reviewr text...*"></textarea>
                <input type="submit" value="Add Review"/>
            </form>
        </div>
    );
};

export default Review;