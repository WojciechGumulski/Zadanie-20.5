import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import reducers from './reducers/countries-reducer.js';
import { getCountries } from './actions/actions-countries.js'
import Navigation from './presentational/navigation.component';
import './country.css'

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

