import React from 'react';
import HEAD from './CODE/HEAD/HEAD.js'
import CONTENT from './CODE/CONTENT/CONTENT.js'
import FOOTER from './CODE/FOOTER/FOOTER'
import s from './App.module.css'




function App(props) {

  return (

      <div className={s.wrapper}>
        <HEAD />
        <CONTENT data={props.data} dispatch={props.dispatch}/>
        <FOOTER />
      </div>

  );
}

export default App;
