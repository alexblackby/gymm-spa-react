import utils from "../utils/utils";
import dataOps from "../utils/dataOps";

const emptyTrainer = {
    id: 0,
    createTime: 0,
    title: '',
    sets: [],
}

const emptyTrain = {
    id: 0,
    createTime: 0,
    trainers: [],
    currentTrainer: utils.cloneObject(emptyTrainer),
    isSaved: false
}

const initState = emptyTrain


const currentTrain = (state = initState, action) => {
    switch (action.type) {
        case 'FINISH_CURRENT_TRAINER':
            const finishedTrainer = utils.cloneObject(state.currentTrainer)
            let newTrainers = utils.cloneObject(state.trainers)
            if (finishedTrainer.id && finishedTrainer.sets.length > 0) {
                newTrainers.push(finishedTrainer)
            }
            return {
                ...state,
                currentTrainer: utils.cloneObject(emptyTrainer),
                trainers: newTrainers
            }
        case 'FINISH_CURRENT_TRAIN':
            return {
                ...emptyTrain
            }
        case 'DELETE_CURRENT_TRAINER_SET':
            let newSets = state.currentTrainer.sets.slice()
            newSets.splice(action.setNum, 1)
            newSets = dataOps.orderSets(newSets)
            return {
                ...state,
                currentTrainer: {
                    ...state.currentTrainer,
                    sets: newSets
                }
            }
        case 'DELETE_TRAINER_FROM_CURRENT_TRAIN':
            return {
                ...state,
                trainers: state.trainers.filter( item => item.id !== action.trainerId )
            }
        case 'ADD_CURRENT_TRAINER_SET':
            return {
                ...state,
                currentTrainer: {
                    ...state.currentTrainer,
                    sets: [
                        ...state.currentTrainer.sets,
                        action.set
                    ]
                }
            }
        case 'START_TRAIN':
            return {
                ...emptyTrain,
                id: action.id,
                createTime: action.createTime
            }
        case 'START_TRAINER':
            const newCurrentTrainer = {
                ...emptyTrainer,
                id: action.id,
                title: action.title,
                createTime: action.createTime
            }
            return {
                ...state,
                currentTrainer: newCurrentTrainer
            }
        case 'SET_CURRENT_TRAIN':
            return {
                ...action.trainData
            }
        case 'MARK_CURRENT_TRAIN_SAVED':
            return {
                ...state,
                isSaved: action.isSaved
            }
        default:
            return state
    }
}

export default currentTrain
