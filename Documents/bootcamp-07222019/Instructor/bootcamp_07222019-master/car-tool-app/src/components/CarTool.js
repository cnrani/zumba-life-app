import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const [ cars, setCars ] = useState([]);
  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };


  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={setEditCarId} onDeleteCar={deleteCar} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;

};
