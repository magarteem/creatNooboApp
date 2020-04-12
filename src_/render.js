import React from 'react';
import ReactDOM from 'react-dom';
import s from './App.module.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import {addData_bag} from './redux/state'
import {ubdateTodayTextarea} from './redux/state'

export let render_Tree =(state)=>{
    ReactDOM.render(<App  data={state} addData_bag={addData_bag} ubdateTodayTextarea={ubdateTodayTextarea}/>, document.getElementById('root'));
}
