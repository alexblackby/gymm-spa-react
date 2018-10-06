import dataOps from "../utils/dataOps";

const initState = []

const allTrainers = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_ALL_TRAINERS_LIST':
            return dataOps.extractTrainerTitlesFromAllTrainers(action.allTrainers)
        default:
            return state
    }
}

export default allTrainers
