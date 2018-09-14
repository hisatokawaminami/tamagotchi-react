import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NewTamagotchiForm from './NewTamagotchiForm';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterList: []
    };
    this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
  }

  handleAddingNewTamagotchiToList(newTamagotchi){
    var newMasterList = this.state.masterList.slice();
    newMasterList.push(newTamagotchi);
    this.setState({masterList: newMasterList});
  }
  
  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterList} />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiForm onNewTamagotchi={this.handleAddingNewTamagotchiToList} />} />
        </Switch>
      </div>
    );
  }



}

export default App;
