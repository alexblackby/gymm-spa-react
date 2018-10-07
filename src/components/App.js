import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomeScreen from "./homeScreen/HomeScreen"
import CurrentTrainContainer from "./currentTrain/CurrentTrainContainer"
import initApp from '../service/initApp'
import '../assets/App.css'

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
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default App