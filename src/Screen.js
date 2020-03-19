import React, {Component} from "react";
import './styles/Screen.css'

class Screen extends Component {
    render() {
        return (
            <section className="screen">
                <Result>{this.props.result}</Result>
                <Equation>{this.props.equation}</Equation>
            </section>
        )
    }
}

export default Screen;

//Function based component for result screen
//props.children is used to display whatever is being passed between <component></component> tags
const Result = props => (
    <div className="result-screen">
       {props.children}
    </div>
);

//Function based component for display the equation
const Equation =props => (
    <div className="equation-screen">
        {props.children}
    </div>
);
