import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp';
import rootReducer from './reducers/rootReducer';

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
            <div>
                <TodoApp />
            </div>
        </Provider>
      </div>
    );
  }
}

export default App;
