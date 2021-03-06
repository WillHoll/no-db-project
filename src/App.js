import React from 'react';
import './App.css';
import Header from './components/Header';
import routes from './routes';
import './reset.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
