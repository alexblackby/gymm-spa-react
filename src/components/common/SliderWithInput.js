import React, {Component} from 'react'
import {Col, InputNumber, Row, Slider} from 'antd'
import 'antd/lib/slider/style/css'
import 'antd/lib/input-number/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'


class SliderWithInput extends Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: 1}

        this.onChange = this.onChange.bind(this)
    }

    onChange = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render() {
        const {inputValue} = this.state
        return (
            <Row>
                <Col span={16}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={8}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{marginLeft: 16}}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        )
    }
}

export default SliderWithInput