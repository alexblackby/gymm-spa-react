import {connect} from 'react-redux'
import TrainHistory from "./TrainHistory"

const mapStateToProps = function (state) {
    return {
        trainHistory: state.trainHistory
    }
}

export default connect(mapStateToProps)(TrainHistory)