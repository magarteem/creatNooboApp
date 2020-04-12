import React from 'react';
import s from './today.module.css'
import { Route, NavLink } from 'react-router-dom';
import Test1 from '../order_Shop/test/test1'
import Bag from './bag/bag';

let Today_menu = (props) => {
    let path = "/today/" + props.path;
    return (
        <NavLink className={props.clas_es} to={path}><div>{props.name}</div></NavLink>
    )
}
const Today = (props) => {
    // debugger
    return (
        <div className={s.grid}>
            <div className={s.grid1}>
                <div className={s.nav_grid}>
                    <Today_menu clas_es={s.nav1} path={props.data.today.data_today[0].path} name={props.data.today.data_today[0].name} />
                    <Today_menu clas_es={s.nav2} path={props.data.today.data_today[1].path} name={props.data.today.data_today[1].name} />
                    <Today_menu clas_es={s.nav3} path={props.data.today.data_today[2].path} name={props.data.today.data_today[2].name} />
                    <Today_menu clas_es={s.nav4} path={props.data.today.data_today[3].path} name={props.data.today.data_today[3].name} />
                    <Today_menu clas_es={s.nav5} path={props.data.today.data_today[4].path} name={props.data.today.data_today[4].name} />
                </div>
            </div>
            <div className={s.grid2}></div>
            <div className={s.grid3}>
                <Route path="/today/order" component={Test1} />
                <Route path="/today/bag" render={() =>
                    <Bag
                        data={props.data}
                        dispatch={props.dispatch}
                    />}
                />
            </div>
        </div>
    )
}
export default Today;

























{/* <Order_Shoop_menu clas_e={Ord_Shoop[0].class} path={Ord_Shoop[0].path} name={Ord_Shoop[0].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[1].class} path={Ord_Shoop[1].path} name={Ord_Shoop[1].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[2].class} path={Ord_Shoop[2].path} name={Ord_Shoop[2].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[3].class} path={Ord_Shoop[3].path} name={Ord_Shoop[3].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[4].class} path={Ord_Shoop[4].path} name={Ord_Shoop[4].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[5].class} path={Ord_Shoop[5].path} name={Ord_Shoop[5].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[6].class} path={Ord_Shoop[6].path} name={Ord_Shoop[6].name} /> */}