import React from 'react';
import styled from 'styled-components/macro';

const applyStyles = component => {
  return styled(component)`
    border-collapse: collapse;

    thead th {
      font-weight: bold;
      border-bottom: 3px solid black;
    }
  `;
};

export const ContactTable = applyStyles((props) => {

  // props.newProp = 'test';
  // props.contacts = [];


  // contacts.push({
  //   id: 56,
  //   fullName: 'Bob',
  //   // picture the rest of the fields here...
  // });

  return <table className={props.className}>
    <thead>
      <tr>
        <th>Id</th>
        <th>Full Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>State</th>
        <th>Bio</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.map(contact => <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.fullName}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>{contact.state}</td>
        <td>{contact.bio}</td>
      </tr>)}
    </tbody>
  </table>;
  
});

