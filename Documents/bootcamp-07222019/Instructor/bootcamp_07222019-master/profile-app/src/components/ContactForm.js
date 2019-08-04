import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { ContactTable } from './ContactTable';

export const ContactForm = styled((props) => {

  const [ contactForm, setContactForm ] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    bio: '',
  });

  const change = ({ target: { name, value } }) => {
    setContactForm({
      ...contactForm,
      [ name ]: value,
    });
  };

  const submitContact = () => {

    props.onSubmitContact(contactForm);

  };

  return <div className={props.className}>
    <form>
      <div>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" name="fullName"
          value={contactForm.fullName} onChange={change} />
      </div>
      <div>
        <label htmlFor="phone-input">Phone:</label>
        <input type="text" id="phone-input" name="phone"
          value={contactForm.phone} onChange={change} />
      </div>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input type="text" id="email-input" name="email"
          value={contactForm.email} onChange={change} />
      </div>
      <div>
        <label htmlFor="state-input">State:</label>
        <select id="state-input" name="state" value={contactForm.state} onChange={change}>
          <option value="">Select State...</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="ND">North Dakota</option>
          <option value="TG">Telangana</option>
          <option value="ND">Virginia</option>
        </select>
      </div>
      <div>
        <label htmlFor="bio-input">Biography:</label>
        <textarea id="bio-input" name="bio"
          value={contactForm.bio} onChange={change}
          rows="5" cols="60" />
      </div>
      <button type="button" onClick={submitContact}>{props.buttonText}</button>
    </form>
  </div>;

})`

`;