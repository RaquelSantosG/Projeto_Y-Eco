import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{minHeight: '100vh'}}>
          
          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
