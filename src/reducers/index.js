import { combineReducers } from 'redux'
import authData from "./authData";
import trainHistory from "./trainHistory";
import allTrainers from "./allTrainers";
import apiError from "./apiError";
import currentTrain from "./currentTrain";

export default combineReducers({
    authData,
    trainHistory,
    currentTrain,
    allTrainers,
    apiError
})
