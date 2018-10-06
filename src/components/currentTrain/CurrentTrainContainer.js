import {connect} from 'react-redux'
import CurrentTrain from "./CurrentTrain"
import {startTrain} from "../../actions"

const mapStateToProps = function (store) {
    return {
        currentTrain: store.currentTrain
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startTrain: (id, createTime) => {
            dispatch(startTrain({id, createTime}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrain)