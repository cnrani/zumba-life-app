import React from 'react';
import { useForm } from '../hooks/useForm';

export const EditCarRow = ({car , onUpdateCar, onCancelCar}) => { 

    const [carForm, change] = useForm({ ...car});

    const updateCar = () => {
        onUpdateCar(carForm);
      }; 

    const cancelCar = () => {
        onCancelCar(-1);
    };   
      


    return <tr key={car.id}>
                    <td>{car.id}</td>
                    <td><input type="text" id="make-input" name="make" value={carForm.make} onChange={change}></input></td>
                    <td><input type="text" id="model-input" name="model" value={carForm.model} onChange={change}></input></td>
                    <td><input type="text" id="year-input" name="year" value={carForm.year} onChange={change}></input></td>
                    <td><input type="text" id="color-input" name="color" value={carForm.color} onChange={change}></input></td>
                    <td><input type="text" id="price-input" name="price" value={carForm.price} onChange={change}></input></td>
                    <td>
                        <button type="button" onClick={updateCar}>Save</button>
                        <button type="button" onClick={cancelCar}>Cancel</button>
                    </td>
              </tr>;

};