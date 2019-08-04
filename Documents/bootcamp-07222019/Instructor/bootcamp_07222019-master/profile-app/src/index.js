import React from 'react';
import ReactDOM from 'react-dom';

import { Profile } from './components/Profile';

import profileImageURL from './images/jean-valjean.jpg';
import firstThingImageURL from './images/bread.jpg';
import secondThingImageURL from './images/candlesticks.jpg';
import thirdThingImageURL from './images/cosette.jpg';

const profileData = {
  fullName: 'Jean Valjean',
  imageURL: profileImageURL,
  imageAlt: 'Jean Valjean Profile',
  bio: "Jean Valjean is the protagonist of Victor Hugo's 1862 novel Les Misérables. Hugo depicts the character's 19-year-long struggle to lead a normal life after serving a prison sentence for stealing bread to feed his sister's children during a time of economic depression and various attempts to escape from prison.",
  interestingThings: [
    { id: 1, imageURL: firstThingImageURL, imageAlt: 'Loaf of Bread', content: 'Jean Valjean was sentenced to jail for 19 years for stealing a load of bread.' },
    { id: 2, imageURL: secondThingImageURL, imageAlt: 'Silver Candlesticks', content: 'Jean Valjean was given candlesticks by a bishop and he took them with himself wherever he traveled.' },
    { id: 3, imageURL: thirdThingImageURL, imageAlt: 'Cosette', content: 'Jean Valjean cared for and raised Fantine\'s child, Cosette, until she is married.' },
  ],
  companyName: 'Some Wiki, Inc.'
};

ReactDOM.render(
  <Profile profileData={profileData} />,
  document.querySelector('#root'),
);
