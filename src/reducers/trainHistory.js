import dataOps from "../utils/dataOps";

const initState = {
    items: [],
    ownTrainers: [],
    historyIsLoading: false,
    historyIsLoaded: false,
    historyIsLoadedFully: false
}

const trainHistory = (state = initState, action) => {
    switch (action.type) {
        case 'SAVE_CURRENT_TRAIN_TO_HISTORY':
            if (action.currentTrain.trainers.length === 0) {
                return state
            }
            const finishedTrain = dataOps.convertCurrentTrainForSaving(state.currentTrain)

            // try to find train with the same id in history and replace it,
            // otherwise - just add to the beginning of history items
            const existingIndex = state.items.findIndex(item => item.id === finishedTrain.id)
            if (existingIndex !== -1) {
                return {
                    ...state,
                    items: state.items.map(item => (item.id === finishedTrain.id ? finishedTrain : item))
                }
            } else {
                return {
                    ...state,
                    items: [finishedTrain, ...state.items]
                }
            }
        case 'DELETE_TRAIN':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.trainId)
            }
        case 'ADD_TO_TRAIN_HISTORY':
            const newTrainHistory = [...state.items, ...action.historyItems]
            return {
                ...state,
                items: newTrainHistory,
                ownTrainers: dataOps.extractTrainerTitlesFromHistory(newTrainHistory),
                historyIsLoaded: true
            }
        case 'SET_TRAIN_HISTORY_LOADING':
            return {
                ...state,
                historyIsLoading: action.isLoading
            }
        case 'SET_TRAIN_HISTORY_LOADED_FULLY':
            return {
                ...state,
                historyIsLoadedFully: true
            }
        default:
            return state
    }
}

export default trainHistory
