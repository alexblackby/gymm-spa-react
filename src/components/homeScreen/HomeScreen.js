import React, { Component } from 'react';
import DefaultHeader from "../common/DefaultHeader";
import TrainHistoryContainer from "../trainHistory/TrainHistoryContainer";
import StartTrainBlock from "./StartTrainBlock";
import createHistory from "history/createHashHistory";

class HomeScreen extends Component {

    clickStart() {
        const location = {
            pathname: '/current-train'
        }
        const history = createHistory()
        history.push(location)
    }

    render() {
        return (
            <div>
                <DefaultHeader/>
                <StartTrainBlock onClickStart={this.clickStart}/>
                <TrainHistoryContainer/>
            </div>
        );
    }
}

export default HomeScreen;