import utils from './utils'


const caseInsensitiveSort = function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
}

const extractTrainerTitlesFromHistory = function (trainHistory) {
    // return array of user's recently used trainers
    let trainerTitles = []

    for (let train of trainHistory) {
        for (let trainer of train.trainers) {
            if (trainerTitles.indexOf(trainer.title) === -1) {
                trainerTitles.push(trainer.title)
            }
        }
    }

    trainerTitles.sort(caseInsensitiveSort)
    return trainerTitles
}

const extractTrainerTitlesFromAllTrainers = function (allTrainers) {
    let trainerTitles = allTrainers.map(item => item.title)
    trainerTitles.sort(caseInsensitiveSort)
    return trainerTitles
}

const convertCurrentTrainForSaving = function (currentTrain) {
    let ct = utils.cloneObject(currentTrain)
    let trainData = {
        id: ct.id,
        createTime: ct.createTime,
        trainers: ct.trainers
    }
    if (ct.currentTrainer.id && ct.currentTrainer.sets.length > 0) {
        trainData.trainers.push(ct.currentTrainer)
    }
    return trainData
}


const orderSets = function (sets) {
    let i = 0
    return sets.map(
        item => {
            item.num = i++
            return item
        }
    )
}


export default {
    extractTrainerTitlesFromHistory,
    extractTrainerTitlesFromAllTrainers,
    convertCurrentTrainForSaving,
    orderSets
}
