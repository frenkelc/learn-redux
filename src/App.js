import React from 'react';
import './App.css';
import  Counter from './Counter';
import store from './Store/';
import InputMirror from './InputMirror';

class App extends React.Component {
  render(){
    return (
     <div className="App">
        <Counter store={store}/>
        <InputMirror store={store}/>
    </div>
      );}
}

export default App;
