
import {ADD_CAR_ACTION,UPDATE_CAR_ACTION,DELETE_CAR_ACTION,EDIT_CAR_ACTION, CANCEL_CAR_ACTION} from "../actions/carTool.actions";


export const carReducer =  (state = { cars:[], editCarId:-1}, action) => {   // current and accumulator . state is immutable and need to reproduce new state every time
    console.log('state: ', state, 'action: ', action);

    switch(action.type) {
        case ADD_CAR_ACTION:
            //return state.result + action.payload.value;  it returns new state which is changing state but not the object which is similar to 'state = { results:0 }'
            return{
                ...state,
                cars: state.cars.concat({
                    ...action.payload.car,
                    id: Math.max(...state.cars.map(c => c.id), 0) + 1,
                }),
                editCarId: -1,
            };

        case UPDATE_CAR_ACTION:
            return{
                ...state,
                cars: state.cars.map(c => {
                    if(c.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return c;
                    }
                }),

            };
        //return state - action.payload.value;  // it is just number not the object
        case DELETE_CAR_ACTION:
            return{

                ...state, // copies from old state
                cars: state.cars.filter(c => c.id === state.cars.id),
                editCarId: -1,
            };
        //return state - action.payload.value;  // it is just number not the object
        case EDIT_CAR_ACTION:
            return{
                ...state, // copies from old state
                editCarId: action.payload.carId,

            };

        //return state - action.payload.value;  // it is just number not the object
        case CANCEL_CAR_ACTION:
            return{
                ...state, // copies from old state
                editCarId: -1,

            };
        default:
            return state;
    }

} ;  // second is accumulator, first one is func
