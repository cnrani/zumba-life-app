import React from 'react';
import MyReactDOM from 'react-dom';
import {Profile} from './components/Profile';
import USpic from "./US.jpg";
import Profilepic from './gpromokhov_default_jpg.jpg';


const colorsList= [
    {id: 1, name: 'orange'},
    {id: 2, name: 'green'},
    {id: 3, name: 'mint'},
    {id: 4, name: 'green'},
    {id: 5,name:  'burgundy'},
    {id: 6, name: 'pink'}
];

const profileDataList  = {
    profileName: 'Gleb',
    profileUrl: Profilepic,
    interestingThingsList: [
        {id : 1, name : 'Gleb has been to every state in USA', pic: USpic},
        {id : 2, name : 'Camping', pic:'camping.jpg'},
        {id : 3, name : 'Hikes',pic:'hiking.jpg'},
    ]

};

MyReactDOM.render(
    //React.createElement(Profile),
    <Profile colors={colorsList} profileData={profileDataList}/>,
    document.querySelector('#root'),
);



