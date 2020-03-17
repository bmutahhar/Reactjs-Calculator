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

const Result = props => (
    <div className="result-screen">
       {props.children}
    </div>
);

const Equation =props => (
    <div className="equation-screen">
        {props.children}
    </div>
);
