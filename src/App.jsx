import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Carrito from './Components/Carrito';
import Sesion from './Components/Sesion';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/carrito" component={Carrito}/>
          <Route path="/login" component={Sesion}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
