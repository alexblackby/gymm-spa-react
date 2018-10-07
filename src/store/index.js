import {createStore} from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

// todo: узнать где лучше разместить геттеры для state, ведь они нужны не только в компонентах но и в АПИ
const getters = {
    getTrainHistoryLastCreateTime: () => {
        const len = store.getState().trainHistory.items.length
        if (len === 0) {
            return 0
        }
        return store.getState().trainHistory.items[len - 1].createTime
    },
    hasCurrentTrainer: () => !!store.getState().currentTrain.currentTrainer.id,
    hasHistoryForTrainer: (trainerTitle) =>
        store.getState().trainHistory.items.some(
            item => item.trainers.some(
                subitem => subitem.title === trainerTitle
            )
        ),
    getHistoryForTrainer: (trainerTitle, maxItems = 3) => {
        let results = []
        for (let train of store.getState().trainHistory.items) {
            let items = train.trainers.filter(
                subitem => subitem.title === trainerTitle
            )
            if (items.length > 0) {
                results.push(items[0])
            }
            if (results.length === maxItems) break
        }
        return results
    },
    authLoaded: () => !!store.getState().authData.token,
    historyIsLoading: () => store.getState().trainHistory.historyIsLoading,
    historyIsLoadedFully: () => store.getState().trainHistory.historyIsLoadedFully
}

export {store, getters}

