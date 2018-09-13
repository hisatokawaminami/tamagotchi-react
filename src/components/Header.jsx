import React from 'react';
import { Link } from 'react-router-dom';
import tamagotchiGif from '../assets/images/tamagotchi.gif';

function Header(){
  return (
    <div>
      <h1>Tamagotchi</h1>
      <Link to="/">Home</Link> | <Link to="/newtamagotchi">Create Tamagotchi</Link>
        <hr/>
<br/>
        <img src={tamagotchiGif}/>
    <hr/>
    </div>
  );
}

export default Header;
