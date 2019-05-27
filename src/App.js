import React from 'react';
import './App.css';
import  Counter from './Counter';
import store from './Store/';

class App extends React.Component {
  render(){
    return (
     <div className="App">
        <Counter store={store}/>
      </div>
    );
  }
}

export default App;
