import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allreducers from './Reducers'; 
import {Provider} from 'react-redux';
import App from './Components/App';

const store = createStore(allreducers);

ReactDOM.render(<Provider  store= {store}>
                     <App />
                 </Provider>, document.getElementById('root'));
