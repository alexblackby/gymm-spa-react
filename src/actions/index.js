import * as types from './actionTypes'

export function startTrain({id, createTime}) {
    return {
        type: types.START_TRAIN,
        id,
        createTime
    }
}

export function startTrainer({id, title, createTime}) {
    return {
        type: types.START_TRAINER,
        id,
        title,
        createTime
    }
}

export function setCurrentTrain({trainData}) {
    return {
        type: types.SET_CURRENT_TRAIN,
        trainData
    }
}

export function addCurrentTrainerSet({set}) {
    return {
        type: types.ADD_CURRENT_TRAINER_SET,
        set
    }
}

export function saveCurrentTrainToHistory({currentTrain}) {
    return {
        type: types.SAVE_CURRENT_TRAIN_TO_HISTORY,
        currentTrain
    }
}

export function deleteTrainerFromCurrentTrain({trainerId}) {
    return {
        type: types.DELETE_TRAINER_FROM_CURRENT_TRAIN,
        trainerId
    }
}

export function deleteCurrentTrainerSet({setNum}) {
    return {
        type: types.DELETE_CURRENT_TRAINER_SET,
        setNum
    }
}

export function deleteTrain({trainId}) {
    return {
        type: types.DELETE_TRAIN,
        trainId
    }
}

export function finishCurrentTrainer() {
    return {
        type: types.FINISH_CURRENT_TRAINER
    }
}

export function finishCurrentTrain() {
    return {
        type: types.FINISH_CURRENT_TRAIN
    }
}

export function setTrainHistoryLoadedFully() {
    return {
        type: types.SET_TRAIN_HISTORY_LOADED_FULLY
    }
}

export function addToTrainHistory({historyItems}) {
    return {
        type: types.ADD_TO_TRAIN_HISTORY,
        historyItems
    }
}

export function initAllTrainersList({allTrainers}) {
    return {
        type: types.INIT_ALL_TRAINERS_LIST,
        allTrainers
    }
}

export function setTrainHistoryLoading({isLoading}) {
    return {
        type: types.SET_TRAIN_HISTORY_LOADING,
        isLoading
    }
}

export function markCurrentTrainSaved({isSaved}) {
    return {
        type: types.MARK_CURRENT_TRAIN_SAVED,
        isSaved
    }
}

export function setAuthData({token, userId, userEmail}) {
    return {
        type: types.SET_AUTH_DATA,
        token,
        userId,
        userEmail
    }
}

export function setApiError({hasError}) {
    return {
        type: types.SET_API_ERROR,
        hasError
    }
}

