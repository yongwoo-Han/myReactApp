import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import SearchPerformance from './component/SearchPerformance';
import MainMenuList from './component/MainMenuList';
import { Provider } from 'react-redux';
import PageTemplate from './page/PageTemplate'

const App = () => {
  return (
    <div>
      <PageTemplate/>
    </div>
    
    // <div className="App">
    // </div>
  );
}

export default App;
