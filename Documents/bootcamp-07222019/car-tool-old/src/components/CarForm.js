import React from 'react';
import { useForm } from '../hooks/useForm';

export const CarForm = (props) => {

    const [carForm , change, resetCarForm] = useForm({
        make:'',
        model:'',
        year:'',
        color:'',
        price:''
    });

    const submitCar = () => {
        props.onSubmitCar({...carForm});
        resetCarForm();
    };


    return <div>
    <form>
        <div>
            <lable htmlFor="make-input">Make:</lable>
            <input type="text" id="make-input" name="make"
                value={carForm.make} onChange={change}></input>
        </div>
        <div>
            <lable htmlFor="model-input">Model:</lable>
            <input type="text" id="model-input" name="model"
                value={carForm.model} onChange={change}></input>
        </div>
        <div>
            <lable htmlFor="year-input">Year:</lable>
            <input type="text" id="year-input" name="year"
                value={carForm.year} onChange={change}></input>
        </div>
        <div>
            <lable htmlFor="color-input">Color:</lable>
            <input type="text" id="color-input" name="color"
                value={carForm.color} onChange={change}></input>
        </div>
        <div>
            <lable htmlFor="price-input">Price:</lable>
            <input type="text" id="price-input" name="price"
                value={carForm.price} onChange={change}></input>
        </div>
        <div>
        <button type="button" onClick={submitCar}>{props.buttonText}</button>
        </div>
    </form>
  </div>;

};