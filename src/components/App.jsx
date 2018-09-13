import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NewTamagotchiForm from './NewTamagotchiForm';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TamagotchiList} />
        <Route path='/newtamagotchi' component={NewTamagotchiForm} />
      </Switch>
    </div>
  );
}

export default App;
