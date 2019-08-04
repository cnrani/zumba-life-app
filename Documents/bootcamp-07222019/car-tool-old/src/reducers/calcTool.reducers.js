
import {ADD_ACTION,SUBTRACT_ACTION,MULTIPLY_ACTION,DIVIDE_ACTION,CLEAR_ACTION} from "../actions/calcTool.actions";


export const calReducer =  (state = { result:0 , history:[]}, action) => {   // current and accumulator . state is immutable and need to reproduce new state every time
    console.log('state: ', state, 'action: ', action);

    switch(action.type) {
        case ADD_ACTION:
            //return state.result + action.payload.value;  it returns new state which is changing state but not the object which is similar to 'state = { results:0 }'
            return{
                ...state, // copies from old state
                result: state.result + action.payload.value,
                history:  state.history.concat(" Addition ", action.payload.value)
            };

        case SUBTRACT_ACTION:
            return{
                ...state, // copies from old state
                result: state.result - action.payload.value,
                history:  state.history.concat(" Subtraction " , action.payload.value)
            };
        //return state - action.payload.value;  // it is just number not the object
        case MULTIPLY_ACTION:
            return{
                ...state, // copies from old state
                result: state.result * action.payload.value,
                history:  state.history.concat(" Multiplication " , action.payload.value)

            };
        //return  state * action.payload.value;
        case DIVIDE_ACTION:
            return{
                ...state, // copies from old state
                result: state.result/ action.payload.value,
                history:  state.history.concat(" Division " , action.payload.value)
            };
        // return  state / action.payload.value;
        case CLEAR_ACTION:
            return{
                ...state, // copies from old state
                result: 0,
                history:  []
            };
        // return  state / action.payload.value;
        default:
            return state;
    }

} ;  // second is accumulator, first one is func
