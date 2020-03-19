import React, {Component} from 'react';
import './styles/App.css'
import Calculator from "./Calculator";

//Parent App component containing all other children components
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
