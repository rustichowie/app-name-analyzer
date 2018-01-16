import React from 'react';

const NewNameForm = ({ onSubmit, onFieldChange }) => (
  <div className='new-name-form'>
    <input
        onChange={(e) => onFieldChange('name', e.target.value)}
        placeholder="Skriv inn ditt brukernavn"
        type="text"/>

    <button className="btn" onClick={() => onSubmit()}>Generate names</button>
  </div>
);

NewNameForm.propTypes = {
};

export default NewNameForm;
