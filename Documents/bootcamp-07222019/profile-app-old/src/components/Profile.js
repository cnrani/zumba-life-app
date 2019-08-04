import {ProfileHeaderText, ProfileLabel, ProfilePharagraph, ProfileImage,ProfileTableImg} from "./ProfileHeader";
import USpic from "../US.jpg";
import React, {useState} from "react";

import {ProfileHeader} from './ProfileHeader';
import {InterestingThings} from './InterestingThings';
import {ContactForm} from './ContactForm';
import {ContactTable} from "./ContactTable";


export const Profile = (props) => {

   // const colors = ['orange','green','mint','green','burgundy','pink'];
   // const colorListItem = colors.map(color => <li>{color}</li>);
   // console.log(colors);


    const colorListItem = props.colors.map(color => <li>{color.name}</li>);

    const [contacts, setContacts] = useState([]);
    //const { contactDetails: {firstName, lastName, phone, email, state, bio }} = props;


    const addContact = (contact) => {

        setContacts(
            contacts.concat(
                {
                    ...contact,
                    id: Math.max(...contacts.map(c => c.id), 0) +1,

                }
            )
        )

    };

    // return React.createElement('div', null,
    // React.createElement('div', null, 'Gleb Konstantineovich promokhov',
    // React.createElement('div', null, 'Gleb Konstantineovich promokhov') //produce h1 element
    return(<>
        <ContactForm onSubmitContact={addContact} buttonText="Add Contact" />
        <ContactTable contacts={contacts} />
        <ProfileHeader headerText="Santa claus" profileImg={props.profileData.profileUrl}/>
        {/*<ProfileImage/>*/}
        <InterestingThings interestingThingsList={props.profileData.interestingThingsList} />
    </>) ; // jsx
};
