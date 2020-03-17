import React, {Component} from 'react';
import './styles/App.css'
import Calculator from "./Calculator";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Calculator/>
            </div>
        );
    }

}

export default App;
