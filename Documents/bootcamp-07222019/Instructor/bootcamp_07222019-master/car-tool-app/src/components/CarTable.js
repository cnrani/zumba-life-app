import React from 'react';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        editCarId === car.id
          ? <EditCarRow key={car.id} car={car} />
          : <ViewCarRow key={car.id} car={car}
              onEditCar={editCar} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

};
