import React, {Component}  from 'react';
import Trava from "./foo_tarav/foot_trava.js"
import s from "./footer.module.css"

class FOOTER extends Component {
    render() {
     return(
         <div className={s.footer}>
             <Trava />
         </div>
     )
    }
  }

  export default FOOTER;