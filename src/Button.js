import React, {Component} from 'react';
import './styles/Button.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.focusButton = React.createRef()
    }
    componentDidMount() {
        this.focusButton.current.focus();
    }


    render() {
        const classes = ['btn'];
        if (typeof this.props !== 'undefined' && typeof this.props.type !== 'undefined')
            classes.push('btn-' + this.props.type);
        return (
            <button className={classes.join(' ')} ref={this.focusButton} onClick={this.props.onButtonPress} onKeyDown={this.props.onKeyPress}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;