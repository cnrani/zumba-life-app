import React, { useState } from 'react';

import { ProfileHeader } from './ProfileHeader';
import { ProfileFooter } from './ProfileFooter';
import { ItemList } from './ItemList'; 
import { ContactForm } from './ContactForm';
import { ContactTable } from './ContactTable';

export const Profile = (props) => {

  const [ contacts, setContacts ] = useState([]);

  const { profileData: { fullName, imageURL, imageAlt, bio } } = props;

  const addContact = (contact) => {
    setContacts(contacts.concat({
      ...contact,
      id: Math.max(...contacts.map(c => c.id), 0) + 1,
    }));
  };

  return <>
    <ProfileHeader headerText={fullName} imageURL={imageURL} imageAlt={imageAlt} />
    <div id="content">
      <p>{bio}</p>
      <ItemList items={props.profileData.interestingThings} />
      <ContactForm onSubmitContact={addContact} buttonText="Add Contact" />
      <ContactTable contacts={contacts} />
    </div>      
    <ProfileFooter companyName={props.profileData.companyName} />
  </>;

};