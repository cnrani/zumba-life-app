import React from 'react';
import styled from 'styled-components/macro';

export const ItemList = styled((props) => {

  const items = props.items;

  return <ul className={props.className}>
    {items.map(item => <li key={item.id}>
      <img src={item.imageURL} alt={item.imageAlt} />
      {item.content}
    </li>)}
  </ul>;

})`
  img {
    height: 30px;
  }

  li:nth-child(2n) {
    color: blue;
  }

  li:nth-child(2n+1) {
    color: green;
  }
`;