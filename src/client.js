import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorld from './components/HelloWorld';
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import HelloWorldApp from './components/HelloWorldApp';
import Index from './components/Index';

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
