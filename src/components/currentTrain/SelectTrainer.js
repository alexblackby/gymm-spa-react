import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style/css';

class SelectTrainer extends Component {
    render() {
        const InputWithButton = Input.Search
        return (
            <div>
                <div className="add-trainer-form form">
                    <h1 className="form-header">Добавить упражнение</h1>
                    <form>
                        <div className="enter-title">
                            <InputWithButton placeholder="Введите название упражнения..." enterButton=">">
                            </InputWithButton>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SelectTrainer;