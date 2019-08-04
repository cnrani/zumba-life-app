import React, {useState} from "react";
import ReactDOM from "react-dom";
import {createStore, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

import {CarTool} from "./components/CarTool";

import {CalcToolContainer} from './containers/CalcToolContainer';

import { createAddCarAction,updateCarAction, deleteCarAction, editCarAction} from '../actions/carTool.actions';



export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';



export const createAddAction = value => (
    {   type: ADD_ACTION, payload: {value}}
);

export const createSubtractAction = value => (
    { type: SUBTRACT_ACTION, payload: {value}}
);

export const createMultiplyAction = value => (
    { type: MULTIPLY_ACTION, payload: {value}}
);

export const createDivideAction = value => (
    { type: DIVIDE_ACTION, payload: {value}}
);

export const createClearAction = () => (
    { type: CLEAR_ACTION}
);


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

export const calcStore = createStore(calReducer);


const mapStateToProps = state => ({   // receiving state and returning result

    cars: state.cars,
    editCarId: state.editCarId
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        onAddCar: createAddCarAction,
        onUpdateCar:updateCarAction,
        onDeleteCar:deleteCarAction,
        onEditCar:editCarAction,


    }, dispatch);

/*
const {Provider, Consumer} = React.createContext();
*/



/*const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

    return PresentationalComponent => {
         class ContainerComponent extends React.Component{

            constructor(props){
                super(props);

                this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);

            }

            componentDidMount(){
                this.unsubscribeStore = this.props.store.subscribe(()=>{
                    this.forceUpdate(); //if user incorectly designed tree then use force update

                });
            }

            componentWillUnmount() {
                this.unsubscribeStore();

            }

            render(){
                const stateProps = mapStateToPropsFn(this.props.store.getState())
                return <PresentationalComponent {...this.dispatchProps}{...stateProps}/>

            }
        }

         return () => <Consumer>{value=> <ContainerComponent store={value}/>}</Consumer>

    };

};*/




const createCarToolContainer = connect(mapStateToProps,mapDispatchToProps);

export const CarToolContainer = createCarToolContainer(CarTool);


// const createStore = (reducerFn) => {
//
//     let currentState = undefined;
//     let subscribers = [];
//
//     return {
//         getState: () => currentState, // initial state
//         dispatch: (action) => {
//             currentState = reducerFn(currentState, action);  // state is produced using reducerFn()
//             subscribers.forEach(callbackFn => callbackFn());
//         },
//         subscribe: (callbackFn) => {
//             subscribers.push(callbackFn);  // adding func to array of funcs which is subscribers
//         },
//
//     };
// };


/*calcStore.subscribe(() => {
    console.log(calcStore.getState());

    ReactDOM.render(
        <CalcTool result={calcStore.getState().result} history= { calcStore.getState().history} onAdd={add} onSubtract={subtract} onMultiply={multiply} onDivide={divide} onClear={clear}/>,
        document.querySelector('#root')
    );
});*/


//const  add = value => calcStore.dispatch( createAddAction(value));
//const  subtract = value => calcStore.dispatch( createSubtractAction(value));
//const multiply = value => calcStore.dispatch( createMultiplyAction(value));
//const divide = value => calcStore.dispatch( createDivideAction(value));

/*
const bindActionCreators = (actionMap, dispatchFn) => {

    return Object.keys(actionMap).reduce( (boundActionsMap, actionKey) => {

        boundActionsMap[actionKey] = (...params) => dispatchFn(actionMap[actionKey](...params));  //...params is rest operators

        return boundActionsMap;
    },{});

};
*/

/*

const {add, subtract, multiply, divide, clear } = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear:createClearAction,
}, calcStore.dispatch);
*/

export const CalcTool = ({ result, history, onAdd, onSubtract, onMultiply, onDivide, onClear }) => { //two data props and 5 fun props

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
        <tbody>
        <table>
            <tr>
                <td>
                    <label data-reactid="1">{history}</label>
                </td>
            </tr>
        </table>
        </tbody>
        <div>
            <button type="button" onClick={()=> onClear()}>Clear</button>
        </div>

    </form>;

};



ReactDOM.render(
    <Provider store={calcStore}>
    <CalcToolContainer/>
    </Provider>,
document.querySelector('#root'),

);




