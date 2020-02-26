import React from 'react';
import Main from '../src/pages/Main'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Spanish from './pages/Spanish';
import English from './pages/English';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route exact path="/english" component={English} />
          <Route exact path="/spanish" component={Spanish} />
      </BrowserRouter>
         
      </header>
    </div>
  );
}

export default App;
