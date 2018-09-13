import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div>
      <Header/>
      <TamagotchiList />
    </div>
  );
}

export default App;
