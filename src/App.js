import React, { Component } from 'react';
import Me from './Me.js'
import Works from './Works.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
        
            <Me />
      </div> 
      <div className="right">
        <Works />
      </div>
     </div>
    );
  }
}

export default App;


/**
 * Deployed to github pages using yarn the following instructions
 * https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka
 */