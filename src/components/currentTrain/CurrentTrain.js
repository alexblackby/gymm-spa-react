import React, {Component} from 'react'
import dateFormat from "../../utils/dateFormats"
import utils from "../../utils/utils"
import uuid4 from 'uuid/v4'
import SelectTrainer from "./SelectTrainer"

class CurrentTrain extends Component {

    componentDidMount() {
        const id = uuid4()
        const createTime = utils.timeInSeconds()
        this.props.startTrain(id, createTime)
    }

    render() {
        return (
            <div>
                <div className="current-train-header">
                    <div className="current-train-date">
                        {dateFormat(this.props.currentTrain.createTime, 'dayMonth')}
                    </div>
                    <div className="current-train-stop">
                        Завершить тренировку
                    </div>
                </div>
                <div className="clear"/>
                <SelectTrainer/>
            </div>
        )
    }
}

export default CurrentTrain