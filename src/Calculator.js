import React, {Component} from 'react';
import Screen from './Screen'
import Keypad from './Keypad'
import './styles/App.css'

class Calculator extends Component {
    state = {
        equation: '',
        result: 0
    };


    onButtonPress = event => {
        event.preventDefault();
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.callDelete();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1 || (pressedButton === '=')) {
            if (pressedButton === '=') {
                try {
                    // eslint-disable-next-line no-eval
                    const evalResult = eval(equation);
                    const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    this.setState({result});
                } catch (error) {
                    alert('Invalid Mathematical Equation');
                }
            } else {
                try {
                    // eslint-disable-next-line no-eval
                    const evalResult = eval(equation);
                    const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    this.setState({result});
                    equation += ' ' + pressedButton + ' ';
                } catch (error) {
                    alert('Invalid Mathematical Equation');
                }
            }
        } else {
            equation = this.callBackspace(equation);
        }

        this.setState({equation: equation});
    };

    onKeyPress = event => {
        event.preventDefault();
        const key = event.key;
        const keyCode = event.keyCode;
        let equation = this.state.equation;
        console.log(keyCode);
        if (keyCode === 13) {
            console.log(0);
            try {
                // eslint-disable-next-line no-eval
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                this.setState({result: result});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        } else if (keyCode === 46) {
            return this.callDelete();
        } else if ((key >= '0' && key <= '9') || key === '.') equation += key;
        else if (['+', '-', '*', '/', '%'].indexOf(key) !== -1) {
            try {
                // eslint-disable-next-line no-eval
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                this.setState({result});
                equation += ' ' + key + ' ';
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        } else if (keyCode === 8) {
            equation = this.callBackspace(equation)
        }

        this.setState({equation: equation});

    };

    callDelete() {
        this.setState({equation: '', result: 0});
    }

    callBackspace(equation) {
        equation = equation.trim();
        return equation.substr(0, equation.length - 1);
    }

    render() {
        return (
            <main className="calculator" id="calculator">
                <Screen equation={this.state.equation} result={this.state.result}/>
                <Keypad onButtonPress={this.onButtonPress} onKeyPress={this.onKeyPress}/>
            </main>
        );
    }
}

export default Calculator;

