import React, {Component} from 'react'
import {withRouter} from "react-router-dom"
import DefaultHeader from "../common/DefaultHeader"
import TrainHistoryContainer from "../trainHistory/TrainHistoryContainer"
import StartTrainBlock from "./StartTrainBlock"


class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.clickStart = this.clickStart.bind(this)
    }

    clickStart() {
        this.props.history.push({pathname: '/current-train'})
    }

    render() {
        return (
            <div>
                <DefaultHeader/>
                <StartTrainBlock onClickStart={this.clickStart}/>
                <TrainHistoryContainer/>
            </div>
        )
    }
}

export default withRouter(HomeScreen)