import { connect} from 'react-redux';
import TrainHistory from "./TrainHistory";

const mapStateToProps = function(store) {
    return {
        trainHistory: store.trainHistory
    };
};

export default connect(mapStateToProps)(TrainHistory);