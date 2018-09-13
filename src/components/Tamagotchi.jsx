import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Food:{props.food}</p>
      <p>Attention: {props.attention}</p>
      <p>Sleep: {props.sleep}</p>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  food: PropTypes.number.isRequired,
  attention: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired
};

export default Tamagotchi;
