import React from 'react'
import dateFormat from "../../utils/dateFormats"

const CurrentTrainerHeader = (props) => {
    return (
        <div>
            <div className="current-train-header">
                <div className="current-train-date">
                    {dateFormat(props.createTime, 'dayMonth')}
                </div>
                <div className="current-train-stop" onClick={props.onFinishTrain}>
                    Завершить тренировку
                </div>
                <div className="clear"/>
            </div>
        </div>
    )
}

export default CurrentTrainerHeader