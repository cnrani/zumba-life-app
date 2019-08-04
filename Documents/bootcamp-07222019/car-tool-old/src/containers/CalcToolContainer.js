import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import { createAddAction,createSubtractAction, createMultiplyAction, createDivideAction , createClearAction} from '../actions/calcTool.actions';
import {CalcTool} from '../components/CalcTool'



const mapStateToProps = state => ({   // receiving state and returning result

    result: state.result,
    history: state.history
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        onAdd: createAddAction,
        onSubtract:createSubtractAction,
        onMultiply:createMultiplyAction,
        onDivide:createDivideAction,
        onClear:createClearAction,

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




const createCalcToolContainer = connect(mapStateToProps,mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);