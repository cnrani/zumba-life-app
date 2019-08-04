import React from 'react';
import styled from 'styled-components/macro';


export const ContactTable = styled(({className, contacts: allContacts}) => {

    return <table className={className}>
            <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Phone</th>
                <th>state</th>
                <th>bio</th>
            </tr>
            </thead>
            <tbody>
            {
                allContacts.map(contact => <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.state}</td>
                        <td>{contact.bio}</td>
                    </tr>
                )
            }
            </tbody>
        </table>;


})`
    border-collapse: collapse;

 thead th {
 
 font-weight: bold,
 border-bottom:3px solid black

`;
