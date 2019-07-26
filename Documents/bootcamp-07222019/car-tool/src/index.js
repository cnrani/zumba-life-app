import React, {useState} from "react";
import ReactDOM from "react-dom";
import {CarTool} from "./components/CarTool";

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';



const calReducer =  (state = { result:0 }, action) => {   // current and accumulator . state is immutable and need to reproduce new state every time
    console.log('state: ', state, 'action: ', action);

    switch(action.type) {
        case ADD_ACTION:
            //return state.result + action.payload.value;  it returns new state which is changing state but not the object which is similar to 'state = { results:0 }'
            return{
                ...state, // copies from old state
                result: state.result + action.payload.value,
            };

        case SUBTRACT_ACTION:
            return{
                ...state, // copies from old state
                result: state.result - action.payload.value,
            }
            //return state - action.payload.value;  // it is just number not the object
        case MULTIPLY_ACTION:
            return{
                ...state, // copies from old state
                result: state.result * action.payload.value,
            }
            //return  state * action.payload.value;
        case DIVIDE_ACTION:
            return{
                ...state, // copies from old state
                result: state.result/ action.payload.value,
            }
           // return  state / action.payload.value;
        default:
            return state;
    }

} ;  // second is accumulator, first one is func


const createStore = (reducerFn) => {

    let currentState = undefined;
    let subscribers = [];

    return {
        getState: () => currentState, // initial state
        dispatch: (action) => {
            currentState = reducerFn(currentState, action);  // state is produced using reducerFn()
            subscribers.forEach(callbackFn => callbackFn());
        },
        subscribe: (callbackFn) => {
            subscribers.push(callbackFn);  // adding func to array of funcs which is subscribers
        },

    };
};

const calcStore = createStore(calReducer);

calcStore.subscribe(() => {
    console.log(calcStore.getState());

    ReactDOM.render(
        <CalcTool result={calcStore.getState().result} onAdd={add} onSubtract={subtract} onMultiply={multiply} onDivide={divide}/>,
        document.querySelector('#root')
    );
});

const createAddAction = value => (
{   type: ADD_ACTION, payload: {value}}
);

const createSubtractAction = value => (
    { type: SUBTRACT_ACTION, payload: {value}}
);

const createMultiplyAction = value => (
    { type: MULTIPLY_ACTION, payload: {value}}
);

const createDivideAction = value => (
    { type: DIVIDE_ACTION, payload: {value}}
);


//const  add = value => calcStore.dispatch( createAddAction(value));
//const  subtract = value => calcStore.dispatch( createSubtractAction(value));
//const multiply = value => calcStore.dispatch( createMultiplyAction(value));
//const divide = value => calcStore.dispatch( createDivideAction(value));

const bindActionCreators = (actionMap, dispatchFn) => {

    return Object.keys(actionMap).reduce( (boundActionsMap, actionKey) => {

        boundActionsMap[actionKey] = (...params) => dispatchFn(actionMap[actionKey](...params));  //...params is rest operators

        return boundActionsMap;
    },{});

};


const {add, subtract, multiply, divide } = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
}, calcStore.dispatch);



const CalcTool = ({ result, onAdd, onSubtract, onMultiply, onDivide }) => {

    const [ numInput, setNumInput] = useState(0);
    return <form>
        <div>
            <label> Result: {result} </label>
        </div>
        <div>
            Num: <input type="number"  value={numInput}
                        onChange={e => setNumInput(parseInt(e.target.value))} />
        </div>
        <div>
        <button type="button" onClick={() => onAdd(numInput)}>+</button>
        <button type="button" onClick={() => onSubtract(numInput)}>-</button>
        <button type="button" onClick={() => onMultiply(numInput)}>*</button>
        <button type="button" onClick={() => onDivide(numInput)}>/</button>
        </div>
    </form>;

};

add(0);



