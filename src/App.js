
import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import quicklink from 'quicklink/dist/quicklink.mjs';

import Layout from './hoc/Layout';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const World = lazy(() => import('./components/World'));
const Tech = lazy(() => import('./components/Tech'));
const Contact = lazy(() => import('./components/Contact'));
const Article1 = lazy(() => import('./components/Article1'));
const Article2 = lazy(() => import('./components/Article2'));
const Article3 = lazy(() => import('./components/Article3'));
const Article4 = lazy(() => import('./components/Article4'));

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

  quicklinkHandler = () => {
    quicklink();
  };

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
