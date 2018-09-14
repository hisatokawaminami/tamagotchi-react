import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){

  function handleFeed(){
    props.onFeed(props.id);
  }

  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Food:{props.food}<button onClick={handleFeed}>Feed</button></p>
      <p>Attention: {props.attention}</p>
      <p>Rest: {props.rest}</p>
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string,
  food: PropTypes.number,
  attention: PropTypes.number,
  rest: PropTypes.number,
  id: PropTypes.string,
  onFeed: PropTypes.func
};

export default Tamagotchi;
