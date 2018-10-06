import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeScreen from "./homeScreen/HomeScreen";
import PageNotFound from "./PageNotFound";
import CurrentTrainContainer from "./currentTrain/CurrentTrainContainer";
import initApp from '../service/initApp';
import '../assets/App.css';

class App extends Component {
  constructor(props) {
      super(props)
      initApp()
  }

  render() {
    return (
        <div id="app">
            <Switch>
                <Route exact path='/' component={HomeScreen}/>
                <Route exact path='/current-train' component={CurrentTrainContainer}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
  }
}

export default App;