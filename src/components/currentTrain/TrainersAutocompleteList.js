import React from 'react'

const TrainersAutocompleteList = (props) => {
    return (
        props.items.map(item => (
            <div key={item}
                 onClick={() => props.onSelectTitle(item)}
                 className="own-trainers-item"
            >
                {item.slice(0, 35)}
            </div>
        ))
    )
}

export default TrainersAutocompleteList