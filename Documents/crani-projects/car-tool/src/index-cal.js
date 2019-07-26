
const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';



const calReducer =  (state = 0, action) => {   // current and accumulator . state is immutable and need to reproduce new state every time
    console.log('state: ', state, 'action: ', action);

    switch(action.type){
        case ADD_ACTION:
            return state + action.payload.value;
        case SUBTRACT_ACTION:
            return state - action.payload.value;
        case MULTIPLY_ACTION:
            return  state * action.payload.value;
        case DIVIDE_ACTION:
            return  state / action.payload.value;
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
    });

    const createAddAction = value => (
    { type: ADD_ACTION, payload: {value}}
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

    calcStore.dispatch( createAddAction(1));
    calcStore.dispatch( createSubtractAction(2));
    calcStore.dispatch( createMultiplyAction(3));
    calcStore.dispatch( createDivideAction(4));




