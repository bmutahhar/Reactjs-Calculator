import React, {Component} from 'react';
import './styles/Button.css'

class Button extends Component {
    constructor(props) {
        super(props);
        //This is the react version of referencing an element in the DOM tree
        this.focusButton = React.createRef()
    }
    //Component did mount is the default react function which is applied only after the component is rendered.
    componentDidMount() {
        this.focusButton.current.focus();
    }


    render() {
        //The below code handles different classes associated with the button components
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