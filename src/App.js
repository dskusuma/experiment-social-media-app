import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigations from './components/Navigations';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigations />
          <PostForm />
          <Switch>
            <Route path="/" component={Home} exact/>       
            <Route path="/about" component={About} />       
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={Posts} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
