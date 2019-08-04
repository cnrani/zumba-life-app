import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import { createAddCarAction,updateCarAction, deleteCarAction, editCarAction,cancelCarAction} from '../actions/carTool.actions';
import {CarTool} from "../components/CarTool";



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
        onCancelCar:cancelCarAction,


    }, dispatch);


const createCarToolContainer = connect(mapStateToProps,mapDispatchToProps);

export const CarToolContainer = createCarToolContainer(CarTool);