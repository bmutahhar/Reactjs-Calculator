import React, {Component} from 'react';
import './styles/Button.css'

class Button extends Component {


    render() {
        const classes = ['btn'];
        if (typeof this.props !== 'undefined' && typeof this.props.type !== 'undefined')
            classes.push('btn-' + this.props.type);
        return (
            <button className={classes.join(' ')} onClick={this.props.onButtonPress }>
                {this.props.children}
            </button>
        );
    }
}

export default Button;