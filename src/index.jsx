import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'components/Header';

import routes from './routes';
import store from './store';
import menu from './menu';

class App extends Component {
    render() {
        console.log('dff');
        return (
            <Fragment>
                <Header size='big'>
                    {menu.map((item, idx) => <Link key={idx} to={item.link}>{item.text}</Link>)}
                </Header>
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
            </Fragment>
        );
    }
}

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

ReactDom.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
    document.getElementById('root')
);
