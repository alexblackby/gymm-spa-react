import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeScreen from "./components/HomeScreen";
import PageNotFound from "./components/PageNotFound";
import CurrentTrainContainer from "./components/currentTrain/CurrentTrainContainer";
import * as service from './service'
import './assets/App.css';

class App extends Component {
  constructor(props) {
      super(props)
      service.init()
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