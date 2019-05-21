import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import store from './stores';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DevTools />
        <header className="app-header">
          <ul className="app-header--menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
            <li><Link to="/page3">Page3</Link></li>
          </ul>
        </header>
        <section className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route children={<div>No matched Routes</div>} />
          </Switch>
        </section>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
