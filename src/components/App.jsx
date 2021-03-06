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
      masterList: [
        {
        name: "test",
        food: 100,
        attention: 100,
        rest: 100
        }


      ]
    };
    this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
  }

  handleAddingNewTamagotchiToList(newTamagotchi){
    var newMasterList = this.state.masterList.slice();
    newMasterList.push(newTamagotchi);
    this.setState({masterList: newMasterList});
  }

  componentDidMount() {
    this.updateTimer = setInterval(() =>
      this.updateStatus(),
    1000
  );
  }

  updateStatus() {
    let newMasterList = this.state.masterList.slice();
    newMasterList.forEach((tamagotchi) =>
      {
        tamagotchi.food --;
        tamagotchi.attention -=2;
        tamagotchi.rest -=3;
      });
      this.setState({masterList: newMasterList})
  }

  componentWillUnmount() {
    clearInterval(this.updateTimer);
  }

  handleFeed(id){
    let newMasterList = this.state.masterList.slice();
    newMasterList.map((tamagotchi) =>
  {
    if(tamagotchi.id === id) {
    tamagotchi.food +=10;
  }
  });
  this.setState({masterList: newMasterList});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
              <TamagotchiList tamagotchiList={this.state.masterList}
              onFeed={this.handleFeed}
              />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchiToList} />} />
        </Switch>
      </div>
    );
  }



}

export default App;
