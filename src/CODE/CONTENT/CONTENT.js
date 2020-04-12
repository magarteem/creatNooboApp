import React from 'react';
import s from "./content.module.css"


import { Route } from 'react-router-dom';
import Order_Shoop from './order_Shop/order_Shop'
import Oficial_shoop from './oficial_shoop/oficial_shoop'
import Today from './today/today'


const CONTENT = (props) => {
    // debugger
    return (
        <div className={s.content}>
            {/* <Route path="/Order_shoop" component={Order_Shoop} /> */}
            {/* <Route path="/Order_shoop" render={() => <Order_Shoop Ord_Shoop={props.Ord_Shoop}/>} /> */}
            <Route path="/Order_shoop" render={() => <Order_Shoop data={props.data} dispatch={props.dispatch}/>} />
            <Route path="/Oficial_shoop" component={Oficial_shoop} />
            <Route path="/today" render={() => <Today  data={props.data} dispatch={props.dispatch}/>} />
        </div>
    )
}
export default CONTENT;









// class CONTENT extends Component {
//     render() {
//         return (
//                 <div className={s.content}>
//                     {/* <Route path="/Order_shoop" component={Order_Shoop} /> */}
//                     <Route path="/Order_shoop" render={()=> <Order_Shoop />} />
//                     <Route path="/Oficial_shoop" component={Oficial_shoop} />
//                 </div>
//         )
//     }
// }