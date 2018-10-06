import React, {Component} from 'react'
import 'antd/lib/dropdown/style/css'
import 'antd/lib/menu/style/css'

class TrainerSets extends Component {
    render() {
        const className = this.props.colorScheme + ' trainer-sets'
        return (
            <div className={className}>
                {this.props.sets.map(set => (
                    <div key={set.num} className="trainer-sets-item">
                        {set.weight > 0 && <strong>{set.weight}</strong>} x {set.reps}
                    </div>
                ))
                }
                <div className="clear"/>
            </div>
        )
    }
}

export default TrainerSets