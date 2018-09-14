import React from 'react';
import PropTypes from 'prop-types';

function NewTamagotchiForm(props){
  let _name = null;
  
  function handleNameSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({name: _name.value});
    _name.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNameSubmission}>
        <p>Name Your Tamagotchi</p>
        <input
          type='text'
          id='name'
          placeholder='Enter Name'
          ref={(input) => {_name = input;}}
        />
        <button type='submit'>Go</button>
      </form>
    </div>
  );
}

NewTamagotchiForm.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewTamagotchiForm;
