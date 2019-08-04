

export const ADD_CAR_ACTION = 'ADD';
export const UPDATE_CAR_ACTION = 'UPDATE';
export const DELETE_CAR_ACTION = 'DELETE';
export const EDIT_CAR_ACTION = 'EDIT';
export const CANCEL_CAR_ACTION = 'CANCEL';



export const createAddCarAction = car => (
    {   type: ADD_CAR_ACTION, payload: {car}}
);

export const updateCarAction = car => (
    { type: UPDATE_CAR_ACTION, payload: {car}}
);

export const deleteCarAction = car => (
    { type: DELETE_CAR_ACTION, payload: {car}}
);

export const editCarAction = carId => (
    { type: EDIT_CAR_ACTION, payload: {carId}}
);


export const cancelCarAction = car => (
    { type: CANCEL_CAR_ACTION, payload: {car}}
);




