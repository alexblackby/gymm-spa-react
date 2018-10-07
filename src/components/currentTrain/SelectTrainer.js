import React from 'react'
import {Input} from 'antd'
import 'antd/lib/input/style/css'
import TrainersAutocompleteList from "./TrainersAutocompleteList"

const SelectTrainer = (props) => {
    const InputWithButton = Input.Search

    return (
        <div>
            <div className="add-trainer-form form">
                <h1 className="form-header">Добавить упражнение</h1>
                <form>
                    <div className="enter-title">
                        <InputWithButton
                            onChange={props.titleInputChange}
                            onSearch={props.submitTitle}
                            placeholder="Введите название упражнения..."
                            enterButton=">"
                        >
                        </InputWithButton>
                    </div>
                </form>
                <div className="trainer-form-autocompletes">
                    <TrainersAutocompleteList items={props.ownTrainersAutocomplete} onSelectTitle={props.selectTitle}/>
                    <TrainersAutocompleteList items={props.allTrainersAutocomplete} onSelectTitle={props.selectTitle}/>
                    <div className="clear"/>
                </div>
                {props.ownTrainers.length > 0 &&
                <div className="own-trainers">
                    <div className="own-trainers-title">Ваши упражнения:</div>
                    <TrainersAutocompleteList items={props.ownTrainers} onSelectTitle={props.selectTitle}/>
                    <div className="clear"/>
                </div>
                }
            </div>
        </div>
    )
}

export default SelectTrainer