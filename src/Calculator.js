import React, {Component} from 'react';
import Screen from './Screen'
import Keypad from './Keypad'
import './styles/App.css'

class Calculator extends Component {
    //State defining resultant value and the equation which is to be displayed on the screen.
    state = {
        equation: '',
        result: 0
    };

//button press event handler
    onButtonPress = event => {
        event.preventDefault();
        let equation = this.state.equation;
        //gets the inner text of every button pressed.
        const buttonValue = event.target.innerHTML;
        //implementing the functionality for clear screen button
        if (buttonValue === 'C') return this.callDelete();
        //If the buttons pressed in a number or a decimal point, simply append the pressed value in the equation
        else if ((buttonValue >= '0' && buttonValue <= '9') || buttonValue === '.') equation += buttonValue;
        //If the pressed button is an operator or equals to button then perform the following action
        else if (['+', '-', '*', '/', '%'].includes(buttonValue) || (buttonValue === '=')) {
            //if equal to is pressed, simple evaluate the equation using javascript's built in eval method and display the result
            if (buttonValue === '=') {
                try {
                    // eslint-disable-next-line no-eval
                    const evalResult = eval(equation);
                    const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    this.setState({result});
                } catch (error) {
                    alert('Invalid Mathematical Equation');
                }
            }
            //If the pressed button is an operator, perform the following task:
            else {
                //This block checks if the last character of equation is already an operator, then replace the
                //previous operator with the newly pressed operator.
                equation = equation.trim();
                const lastChar = equation.substr(equation.length - 1);
                if (['+', '-', '*', '/', '%'].includes(lastChar)) {
                    equation = equation.substr(0, equation.length - 1);
                    equation += buttonValue;
                } else {
                    //If the last char is not an operator but an operator button is pressed, evaluate the equation
                    //display the result and append the pressed operator to the equation
                    try {
                        // eslint-disable-next-line no-eval
                        const evalResult = eval(equation);
                        const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                        this.setState({result});
                        equation += ' ' + buttonValue + ' ';
                    } catch (error) {
                        alert('Invalid Mathematical Equation');
                    }
                }
            }
        }
        //If none of the above buttons are pressed, the backspace would have been pressed.
        else {
            equation = this.callBackspace(equation);
        }
        //Display the equation in the semi window on the display screen
        this.setState({equation: equation});
    };

    //Event handler for key down event i.e. input from keyboard
    //Most of the code is same expect the keycodes and doesn't need any further comments
    onKeyPress = event => {
        event.preventDefault();
        const key = event.key;
        const keyCode = event.keyCode;
        let equation = this.state.equation;
        //13 is the keycode for 'Enter' key
        if (keyCode === 13) {
            try {
                // eslint-disable-next-line no-eval
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                this.setState({result: result});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        }
        //46 is the keycode for delete key which clears the entire screen.
        else if (keyCode === 46) {
            return this.callDelete();
        } else if ((key >= '0' && key <= '9') || key === '.') equation += key;
        else if (['+', '-', '*', '/', '%'].includes(key)) {
            equation = equation.trim();
            const lastChar = equation.substr(equation.length - 1);
            if (['+', '-', '*', '/', '%'].includes(lastChar)) {
                equation = equation.substr(0, equation.length - 1);
                equation += key;
            } else {
                try {
                    // eslint-disable-next-line no-eval
                    const evalResult = eval(equation);
                    const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    this.setState({result});
                    equation += ' ' + key + ' ';
                } catch (error) {
                    alert('Invalid Mathematical Equation');
                }
            }
        }
        //8 is the keycode for backspace key
        else if (keyCode === 8) {
            equation = this.callBackspace(equation)
        }
        //Display the equation on the screen
        this.setState({equation: equation});

    };
    //Function to clear everything on screen
    callDelete() {
        this.setState({equation: '', result: 0});
    }
    //Function to perform backspace functionality
    callBackspace(equation) {
        equation = equation.trim();
        return equation.substr(0, equation.length - 1);
    }

    render() {
        return (
            <main className="calculator">
                {/*The values of result and equation are being passed to the Screen component*/}
                <Screen equation={this.state.equation} result={this.state.result}/>
                {/*On click and on key press event is being passed to the keypad component*/}
                <Keypad onButtonPress={this.onButtonPress} onKeyPress={this.onKeyPress}/>
            </main>
        );
    }
}

export default Calculator;

