import React from 'react';
import './styles/LargeButton.css'

//Large button component to display equals to button twice the size of other buttons
const LargeButton = props => <button className="large-button" onClick={props.onButtonPress}>{props.children}</button>;
export default LargeButton;