import React from 'react';
import Tamagotchi from './Tamagotchi';

var masterList = [
  {
    name: "test pet",
    food: "100",
    attention: "90",
    sleep: "80"
  },
  {
    name: "test pet2",
    food: "90",
    attention: "80",
    sleep: "70"
  },
]
function TamagotchiList(){
  return (
    <div>
    {masterList.map((tamagotchi, index) =>
      <Tamagotchi
        name={tamagotchi.name}
        food={tamagotchi.food}
        attention={tamagotchi.attention}
        sleep={tamagotchi.sleep}
        key={index}
      />
    )}
</div>
  );
}

export default TamagotchiList;
