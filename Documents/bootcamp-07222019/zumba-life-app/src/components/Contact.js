import React from "react";


export const Contact = (props) => {

    return(
    <>
    <h1>Contact</h1>
    <p>Contact Id: {props.match.params.id}</p>
        <button type="click" onClick={()=> props.history.push('/')}>Home</button>
    </>

    );
};




//excercise - routing stuff for big project ,