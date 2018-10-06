import React from 'react';
import utils from "../../utils/utils";
import dateFormat from "../../utils/dateFormats";
import {Button} from 'antd';
import 'antd/lib/button/style/css';

const StartTrainBlock = (props) => {
    const dateNow = dateFormat(utils.timeInSeconds(), 'weekdayFullMonth')
    return (
        <div className="form">
            <h1 className="form-header">{dateNow}</h1>
            <div>
                <Button type="primary" onClick={props.onClickStart}>Начать тренировку</Button>
            </div>
        </div>
    )
}

export default StartTrainBlock