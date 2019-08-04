import React from 'react';
import styled from "styled-components";

export const InterestingThings = styled((props) => {

    const interestingThingsList = props.interestingThingsList.map(interest => {

        return(
                <li>{interest.name}
                <img src={interest.pic} alt=""/>
            </li>

        );
    }

);
    return(
            <ul className={props.className}>
                {interestingThingsList}
            </ul>
    );



})`
 li:nth-child(odd) {
    color: green;
}
li:nth-child(even) {
    color: blue;
}
img {
width: 30px
}

`;