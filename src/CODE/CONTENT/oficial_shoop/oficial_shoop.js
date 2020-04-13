import React from 'react';
import s from './oficial_shoop.module.css'

import {  Route } from 'react-router-dom';//**** */
import { NavLink } from 'react-router-dom';//**** */

const Oficial_shoop = () => {
    return (
        <div className={s.bacground}>
            <div className={s.nav_grid}>
                <div className={s.nav1}><NavLink to="/Oficial_shoop/test1">Заказ</NavLink></div>
                <div className={s.nav2}><NavLink to="/Oficial_shoop/test2">БД</NavLink></div>
                <div className={s.nav3}>КК</div>
                <div className={s.nav4}>Оформление</div>
                <div className={s.nav5}>Контакты</div>
                <div className={s.nav6}>Время работы</div>
                <div className={s.nav7}>Буквы</div>
            </div>
            <div>
                {/* <Route path="/Oficial_shoop/test1" component={Test1} /> */}
                {/* <Route path="/Oficial_shoop/test2" component={Test2} /> */}
            </div>
        </div>
    )
}
export default Oficial_shoop;