
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import quicklink from 'quicklink/dist/quicklink.mjs';

import Layout from './hoc/Layout';
import Home from './components/Home';
import World from './components/World';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import Article3 from './components/Article3';
import Article4 from './components/Article4';
import './App.css';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('ray : route change to => ', this.props.location.pathname, ' so call quicklink');
      quicklink();
    }
  }
  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path="/pages/world" component={World} />
          <Route exact path="/pages/tech" component={Tech} />
          <Route exact path="/pages/contact" component={Contact} />
          <Route exact path="/pages/article1" component={Article1} />
          <Route exact path="/pages/article2" component={Article2} />
          <Route exact path="/pages/article3" component={Article3} />
          <Route exact path="/pages/article4" component={Article4} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
