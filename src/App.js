import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigations from './components/Navigations';

class App extends Component {
  getData = async (e) => {
    e.preventDefault();
    const postData = fetch('https://jsonplaceholder.typicode.com/posts');
    const commentData = fetch('https://jsonplaceholder.typicode.com/comments');
    const userData = fetch('https://jsonplaceholder.typicode.com/users');
    const data = [
      await postData.json(),
      await commentData.json(),
      await userData.json()
    ];

    console.log(data);
  }
  render() {
    return (
      // <div className="App">
      // </div>
      <BrowserRouter>
        <div>
          <Navigations />
          <Switch>
            <Route 
              path="/" component={Home} exact  
            />       
            <Route path="/about" component={About} />       
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>    
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
