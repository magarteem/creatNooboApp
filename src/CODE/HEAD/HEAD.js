import React, {Component}  from 'react';
import Head_ul from './head_ul/head_ul.js';
import s from './main_HEAD.module.css'

class HEAD extends Component {
    render() {
        return(
            <div className={s.head}>                
                <Head_ul />             
            </div>);
    }
  }

export default HEAD;
