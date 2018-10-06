import React, {Component} from 'react';
import dateFormat from "../../utils/dateFormats";
import TrainerSets from "../common/TrainerSets";

class TrainHistoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand() {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    }

    render() {
        return (
            <div className="form history-item" onClick={this.toggleExpand}>
                <h2 className="form-header">
                    {dateFormat(this.props.item.createTime, 'weekdayFullMonth')}
                </h2>
                {this.props.item.trainers.map(
                    trainer => (
                        <div key={trainer.createTime}>
                            <div>
                                {trainer.title}
                            </div>
                            { this.state.expanded &&
                                <div className="history-item-sets">
                                    <TrainerSets sets={trainer.sets} colorScheme="black-on-gray" />
                                </div>
                            }
                        </div>
                    )
                )
                }
            </div>
        );
    }
}

export default TrainHistoryItem;