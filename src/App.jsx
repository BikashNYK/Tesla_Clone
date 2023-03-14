import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './store';
function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Header />
      <Home/>
      </Provider>
    </div>
  )
}

export default App
