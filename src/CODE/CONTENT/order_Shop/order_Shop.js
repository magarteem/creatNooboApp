import React from 'react';
import s from './order_Shop.module.css'
import Buy_subscription from './buy_subscription/buy_subscription';
import { Route, NavLink } from 'react-router-dom';

let shoop =  {
    Ord_Shoop: [
        { path: "Buy_subscription", name: "Заказ" },
        { path: "test1", name: "БД" },
        { path: "test2", name: "КК" },
        { path: "ord", name: "Оформление" },
        { path: "kontakt", name: "Контакты" },
        { path: "time_work", name: "Время работы" },
        { path: "books", name: "Буквы" }
    ],
}
let Order_Shoop_menu = (props) => {
    let path = "/Order_shoop/" + props.path;
    return (
        <NavLink className={props.clas_es} to={path}><div>{props.name}</div></NavLink>
    )
}

const Order_Shoop = (props) => {  
    // let Order_Shoop_out = props.Ord_Shoop.map(el => <Order_Shoop_menu clas_e={el.class} path={el.path} name={el.name} 1/>)  111
    return (
        <div className={s.grid}>
            <div className={s.grid1}>
                <div className={s.nav_grid}>
                    {/* {Order_Shoop_out} 111*/}
                    <Order_Shoop_menu clas_es={s.nav1} path={shoop.Ord_Shoop[0].path} name={shoop.Ord_Shoop[0].name} />
                    <Order_Shoop_menu clas_es={s.nav2} path={shoop.Ord_Shoop[1].path} name={shoop.Ord_Shoop[1].name} />
                    <Order_Shoop_menu clas_es={s.nav3} path={shoop.Ord_Shoop[2].path} name={shoop.Ord_Shoop[2].name} />
                    <Order_Shoop_menu clas_es={s.nav4} path={shoop.Ord_Shoop[3].path} name={shoop.Ord_Shoop[3].name} />
                    <Order_Shoop_menu clas_es={s.nav5} path={shoop.Ord_Shoop[4].path} name={shoop.Ord_Shoop[4].name} />
                    <Order_Shoop_menu clas_es={s.nav6} path={shoop.Ord_Shoop[5].path} name={shoop.Ord_Shoop[5].name} />
                    <Order_Shoop_menu clas_es={s.nav7} path={shoop.Ord_Shoop[6].path} name={shoop.Ord_Shoop[6].name} />
                </div>
            </div>
            <div className={s.grid2}></div>
            <div className={s.grid3}>
                <Route path="/Order_shoop/Buy_subscription" component={Buy_subscription} />
            </div>
        </div>
    )
}
export default Order_Shoop;

























                    {/* <Order_Shoop_menu clas_e={Ord_Shoop[0].class} path={Ord_Shoop[0].path} name={Ord_Shoop[0].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[1].class} path={Ord_Shoop[1].path} name={Ord_Shoop[1].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[2].class} path={Ord_Shoop[2].path} name={Ord_Shoop[2].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[3].class} path={Ord_Shoop[3].path} name={Ord_Shoop[3].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[4].class} path={Ord_Shoop[4].path} name={Ord_Shoop[4].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[5].class} path={Ord_Shoop[5].path} name={Ord_Shoop[5].name} />
                    <Order_Shoop_menu clas_e={Ord_Shoop[6].class} path={Ord_Shoop[6].path} name={Ord_Shoop[6].name} /> */}