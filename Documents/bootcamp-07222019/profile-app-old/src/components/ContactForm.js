import React, { useState } from 'react';
import styled from 'styled-components/macro';

export const ContactForm =styled((props) => {

    const contactDetails = {
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        state:['Murmansk','moscow'],
        bio:''
    };
    const [contactForm, setContactForm] = useState(contactDetails);
 //   const [contacts, setContacts] = useState([]);


    const change = ({target: { name, value}}) => {  // e is event
        setContactForm({
            ...contactForm,
            //[e.target.name]: e.target.value,
            [name]: value,
        });
    };


/*  const change = (e) => {  // e is event
      setContactForm({
          ...contactForm,
          [e.target.name]: e.target.value,
      });
  };
    */
  const submitContact = () => {
      props.onSubmitContact(contactForm);

  };

  console.log(contactForm);


  return (
      <div className={props.className}>
          <form>
              <div>
                  <label htmlFor="name-input">First Name:</label>
                  <input type="text" id="name-input" name="firstName" value={contactForm.firstName} onChange={change}/>
              </div>
              <div>
                  <label htmlFor="lastName-input">Last Name:</label>
                  <input type="text" id="lastName-input" name="lastName" value={contactForm.lastName} onChange={change}/>
              </div>
              <div>
                  <label htmlFor="phone-input">Phone:</label>
                  <input type="text" id="phone-input" name="phone" value={contactForm.phone} onChange={change}/>
              </div>
              <div>
                  <label htmlFor="name-input">Email:</label>
                  <input type="text" id="Email-input" name="email" value={contactForm.email} onChange={change}/>
              </div>
              <div>
                  <label htmlFor="state-input">State:</label>
                  <select id="state-input" name="state">
                      <option  value={contactForm.state[0]} onChange={change}>{contactForm.state[0]} </option>
                      <option  value={contactForm.state[0]}  onChange={change}>{contactForm.state[1]} </option>
                  </select>
              </div>
              <div>
                  <label htmlFor="bio-input">Bio:</label>
                  <textarea type="text" id="bio-input" name="Bio" value={contactForm.bio} onChange={change}/>
              </div>
              <button type="button" onClick={submitContact}>{props.buttonText}</button>
          </form>
      </div>
  );
})``;
