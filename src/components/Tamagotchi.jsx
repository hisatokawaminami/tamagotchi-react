import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Food:{props.food}</p>
      <p>Attention: {props.attention}</p>
      <p>Rest: {props.rest}</p>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string,
  food: PropTypes.number,
  attention: PropTypes.number,
  rest: PropTypes.number
};

export default Tamagotchi;
