import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';


function TamagotchiList(props){
  console.log(props.tamagotchiList);
  return (
    <div>
      {props.tamagotchiList.map((tamagotchi) =>
        <Tamagotchi
          name={tamagotchi.name}
          food={tamagotchi.food}
          attention={tamagotchi.attention}
          rest={tamagotchi.rest}
          id={tamagotchi.id}
          key={tamagotchi.id}
          onFeed={props.onFeed}
        />
      )}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array,
  onFeed: PropTypes.func
};

export default TamagotchiList;
