import React, {useState} from "react";
import ReactDOM from "react-dom";
import {createStore, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

import {CarTool} from "./components/CarTool";

import {CalcToolContainer} from './containers/CalcToolContainer';
import {calcStore} from "./calcStore";


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





ReactDOM.render(
    <Provider store={calcStore}>
    <CalcToolContainer/>
    </Provider>,
document.querySelector('#root'),

);




