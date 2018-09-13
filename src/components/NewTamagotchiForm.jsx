import React from 'react';

function NewTamagotchiForm(){
  return (
    <div>
      <form>
        <p>Name Your Tamagotchi</p>
        <input
          type='text'
          id='name'
          placeholder='Enter Name'
        />
        <button type='submit'>Go</button>
      </form>
    </div>
  );
}

export default NewTamagotchiForm;
