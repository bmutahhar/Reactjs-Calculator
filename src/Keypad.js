import React, {Component} from 'react';
import Button from "./Button";
import LargeButton from "./LargeButton";
import './styles/Keypad.css'

class Keypad extends Component {


    render() {
        return (
            <section className="keypad" id="keypad">
                <KeypadRow>
                    <Button type="special" onButtonPress={this.props.onButtonPress}
                            onKeyPress={this.props.onKeyPress}>C</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}
                            onKeyPress={this.props.onKeyPress}>%</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}
                            onKeyPress={this.props.onKeyPress}>Del</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}
                            onKeyPress={this.props.onKeyPress}>/</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>7</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>8</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>9</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}
                            onKeyPress={this.props.onKeyPress}>*</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>4</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>5</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>6</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}
                            onKeyPress={this.props.onKeyPress}>-</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>1</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>2</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>3</Button>
                    <Button type="operator" onButtonPress={this.props.onButtonPress}>+</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>0</Button>
                    <Button onButtonPress={this.props.onButtonPress} onKeyPress={this.props.onKeyPress}>.</Button>
                    <LargeButton onButtonPress={this.props.onButtonPress}
                                 onKeyPress={this.props.onKeyPress}>=</LargeButton>
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
