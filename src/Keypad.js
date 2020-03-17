import React, {Component} from 'react';
import Button from "./Button";
import LargeButton from "./LargeButton";
import './styles/Keypad.css'

class Keypad extends Component {
    render() {
        return (
            <section className="keypad">
                <KeypadRow>
                    <Button type="special" onButtonPress={this.props.onButtonPress}>C</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>%</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>Del</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>/</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>7</Button>
                    <Button onButtonPress={this.props.onButtonPress}>8</Button>
                    <Button onButtonPress={this.props.onButtonPress}>9</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>*</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>4</Button>
                    <Button onButtonPress={this.props.onButtonPress}>5</Button>
                    <Button onButtonPress={this.props.onButtonPress}>6</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>-</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>1</Button>
                    <Button onButtonPress={this.props.onButtonPress}>2</Button>
                    <Button onButtonPress={this.props.onButtonPress}>3</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>+</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>0</Button>
                    <Button onButtonPress={this.props.onButtonPress}>.</Button>
                    <LargeButton onButtonPress={this.props.onButtonPress}>=</LargeButton>
                </KeypadRow>
            </section>
        )
    }
}

export default Keypad;


const KeypadRow = (props) => (
    <div className="keypad-row">
        {props.children}
    </div>
);