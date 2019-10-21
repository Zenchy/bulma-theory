import React, {Component} from 'react';
import './App.css';
import User from './components/User'
import ReactPlayer from 'react-player';

class App extends Component {
  render  (){
    return (
    <div className="App">
     <User firstName='Poderoso'/>
     <User firstName='Funky'/>
     <ReactPlayer url="https://www.youtube.com/watch?v=q3kokYQrVgk"
     playing
     controls
     volume='0.5'/>
    </div>
    )}
  ;
}

export default App;
