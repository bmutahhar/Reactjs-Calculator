import React from 'react';
import './styles/LargeButton.css'

const LargeButton = props => <button className="large-button" onClick={props.onButtonPress}>{props.children}</button>;
export default LargeButton;