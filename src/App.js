
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import quicklink from 'quicklink/dist/quicklink.mjs';

import Layout from './hoc/Layout';
import './App.css';

// ray test touch <
const Home = lazy(() => import(/* webpackChunkName: "home" */ './components/Home'));
const World = lazy(() => import(/* webpackChunkName: "world" */ './components/World'));
const Tech = lazy(() => import(/* webpackChunkName: "tech" */ './components/Tech'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './components/Contact'));
const Article1 = lazy(() => import(/* webpackChunkName: "article1" */ './components/Article1'));
const Article2 = lazy(() => import(/* webpackChunkName: "article2" */ './components/Article2'));
const Article3 = lazy(() => import(/* webpackChunkName: "article3" */ './components/Article3'));
const Article4 = lazy(() => import(/* webpackChunkName: "article4" */ './components/Article4'));
// ray test touch >

class App extends Component {
  // when app is mounted for the first time
  componentDidMount() {
    console.log('ray : [App componentDidMount] route change to => ', this.props.location.pathname, ' so call quicklink');
    this.quicklinkHandler();
  }

  // when app is rerendered after mounted
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('ray : [App componentDidUpdate] route change to => ', this.props.location.pathname, ' so call quicklink');
      this.quicklinkHandler();
    }
  }

  // ray test touch <
  quicklinkHandler = () => {
    // quicklink();
    if (process.env.NODE_ENV === 'production') {
      console.log('ray : production mode quicklink');
      quicklink({
        url: [
          '/static/js/home.4e80f7df.chunk.js',
          '/static/js/world.4a0125db.chunk.js',
          '/static/js/tech.63599b3e.chunk.js',
          '/static/js/contact.6d31ac3e.chunk.js',
          '/static/js/article1.8993d440.chunk.js',
          '/static/js/article2.d91704e7.chunk.js',
          '/static/js/article3.21ad624d.chunk.js',
          '/static/js/article4.dbd75d2c.chunk.js'
        ]
      });
    } else {
      console.log('ray : development mode quicklink');
      quicklink({
        url: [
          '/static/js/home.chunk.js',
          '/static/js/world.chunk.js',
          '/static/js/tech.chunk.js',
          '/static/js/contact.chunk.js',
          '/static/js/article1.chunk.js',
          '/static/js/article2.chunk.js',
          '/static/js/article3.chunk.js',
          '/static/js/article4.chunk.js'
        ]
      });
    }
  };
  // ray test touch >

  render () {
    return (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Layout>
    );
  }
}

export default withRouter(App);
