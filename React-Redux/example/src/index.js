import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {createStore} from 'redux';
import reducers from './Reducers';

import {Provider} from 'react-redux';
const store = createStore(reducers);

//console.log(store.getState());
//subcribe의 반환값은 unsubscribe이다.
//const unsubscribe = store.subscribe(()=> console.log(store.getState()));

ReactDOM.render(
    <Provider store = {store}>
    <App></App></Provider>,
     document.getElementById('root')
    );
    