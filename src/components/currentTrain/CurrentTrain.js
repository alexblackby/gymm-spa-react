import React from 'react'
import SelectTrainerContainer from "./SelectTrainerContainer"
import CurrentTrainerHeader from "./CurrentTrainHeader"
import CurrentTrainer from "./CurrentTrainer"

const CurrentTrain = (props) => {
    const hasCurrentTrain = !!props.currentTrain

    if(hasCurrentTrain) {
        return <div>
            <CurrentTrainerHeader createTime={props.currentTrain.createTime} onFinishTrain={props.finishTrain}/>
            {props.hasCurrentTrainer
                ? <CurrentTrainer currentTrainer={props.currentTrain.currentTrainer}/>
                : <SelectTrainerContainer onStartTrainer={props.startTrainer}/>
            }
        </div>
    }
}

export default CurrentTrain