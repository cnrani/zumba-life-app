import React from 'react';
import styled from 'styled-components/macro';

export const ProfileFooter = styled((props) => {

  return (
    <footer className={props.className}>
      <small>&copy; {new Date().getFullYear()}, {props.companyName}</small>
    </footer>
  );

})`
  small {
    font-size: 0.8rem;
  }
`;
