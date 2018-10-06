import {connect} from 'react-redux';
import SelectTrainer from "./SelectTrainer";

const mapStateToProps = function (store) {
    return {
        ownTrainers: store.trainHistory.ownTrainers,
        allTrainers: store.allTrainers
    };
};

export default connect(mapStateToProps)(SelectTrainer);