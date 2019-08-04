import React from 'react';
import styled from 'styled-components/macro';

export const ProfileHeader = styled((props) => {

  return (
    <header className={props.className}>
      <img src={props.imageURL} alt={props.imageAlt} />
      <h1>{props.headerText}</h1>
    </header>
  );

})`
  img {
    height: 50px;
  }

  h1 {
    color: blue;
    font-family: verdana;
    font-size: 2rem;
  }
`;
