import React from 'react';
import styled from 'styled-components/macro';
import Profilepic from '../gpromokhov_default_jpg.jpg';


export const ProfileHeaderText = styled.h1`
    color: blue;
    font-family: monospace;
    font-size: 50px;
    `;


export const ProfileImage = styled.img.attrs(() => {

    return {
        src: Profilepic,
        alt: 'Santa Profile'
    };
})`
    width: 30px;
    height: 30px;
    `;

export const ProfilePharagraph = styled.p`
        height: 60px;
        border-left: 6px solid red;
    `;

export const ProfileLabel = styled.label`
        cursor: pointer;
        padding: 50px;
        
    `;

export const ProfileTableImg = styled.img`
    height:400px
    
`;

//function ProfileHeader(){

//}

//const ProfileHeader2 = function() {

//};
//props are properties of styled component

export const ProfileHeader = styled((props) => {

    return (
        <header className={props.className}>
            <img src={props.profileImg} alt=""/>
            <h1>{props.headerTex}</h1>
        </header>
    );
})`
 h1 {
    color: blue;
    font-family: monospace;
    font-size: 50px;
 }
`;

