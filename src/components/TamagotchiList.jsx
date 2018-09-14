import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';


function TamagotchiList(props){
  return (
    <div>
      {props.tamagotchiList.map((tamagotchi, index) =>
        <Tamagotchi
          name={tamagotchi.name}
          food={tamagotchi.food}
          attention={tamagotchi.attention}
          rest={tamagotchi.rest}
          key={index}
        />
      )}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array
};

export default TamagotchiList;
