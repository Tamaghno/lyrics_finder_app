import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Layouts/Navbar';
import Index from './Components/Layouts/Index';
import Lyrics from './Components/tracks/Lyrics';
import {Provider} from './Context';
import './App.css';

class App extends React.Component{
  render(){
    return(
     
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
          <h8>Made in React JS</h8>
          <br />
          <small>Made with ♥ by <a href="https://github.com/tamaghno" target="_blank">Tamaghno Chaudhuri</a></small>
         <br />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
         </React.Fragment>
      </Router>
    </Provider>
    );
  }
}


export default App;
