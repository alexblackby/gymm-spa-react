import React, {Component} from "react"
import {connect} from 'react-redux'
import CurrentTrain from "./CurrentTrain"
import {finishCurrentTrainer, finishCurrentTrain, startTrain, startTrainer} from "../../actions"
import uuid4 from "uuid/v4"
import utils from "../../utils/utils"
import {withRouter} from "react-router-dom";


class CurrentTrainContainer extends Component {
    constructor(props) {
        super(props)

        this.finishTrain = this.finishTrain.bind(this)
    }

    componentDidMount() {
        const id = uuid4()
        const createTime = utils.timeInSeconds()
        this.props.startTrain(id, createTime)
    }

    finishTrain() {
        this.props.finishTrain()
        this.props.history.push({pathname: '/'})
    }

    render() {
        return (
            <CurrentTrain
                currentTrain={this.props.currentTrain}
                hasCurrentTrainer={this.props.hasCurrentTrainer}
                startTrainer={this.props.startTrainer}
                finishTrain={this.finishTrain}
            />
        )
    }
}


const mapStateToProps = function (state) {
    return {
        currentTrain: state.currentTrain,
        hasCurrentTrainer: !!state.currentTrain.currentTrainer.id
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        startTrain: (id, createTime) => {
            dispatch(startTrain({id, createTime}))
        },
        startTrainer: (title) => {
            dispatch(startTrainer({id: uuid4(), title, createTime: utils.timeInSeconds()}))
        },
        finishTrain: function() {
            dispatch(finishCurrentTrainer())
            dispatch(finishCurrentTrain())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentTrainContainer))