import React, { useState } from 'react';
import { Header } from './Header';
import { CarForm } from './CarForm';
import { CarTable } from './CarTable';


export const CarTool = (props) => {


const [ cars, setCars ] = useState([]); // [] this is array
const [ editCarId, setEditCarId ] = useState(-1);

const addCar = (car) => {
  setCars(cars.concat({
    ...car,
    id: Math.max(...cars.map(c => c.id), 0) + 1,
  }));
};

const deleteCar = (car) => {
  setCars(
      cars.filter(c => c.id !== car.id));
      setEditCarId(-1);
};

const updateCar = (updatedCar) => {
  setCars(
    cars.map(c => {
      if(c.id === updatedCar.id) {
        return updatedCar;
      } else {
        return c;
      }
    }));
    setEditCarId(-1)
};

return <>
    <div id="content">
        <Header headerText="This is a Car DataBase"/>
        <CarForm onSubmitCar={props.onAddCar} buttonText="Add Car"/>
        <CarTable cars={props.cars} onDeleteCar={props.onDeleteCar}
                  editCarId={props.editCarId} onEditCar={props.onEditCar} onUpdateCar={props.onUpdateCar} onCancelCar={props.onCancelCar}/>
    </div>
</>;

};
