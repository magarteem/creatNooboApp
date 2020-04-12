import React from 'react';
import s from './falshe_login.module.css'
// import Falshe_loginb from './Falshe_login.png'
import TransitionsModal from './modal_UI_false_login';

const Falshe_login = () => {
    return (
        <div className={s.imgPosition}>
            {/* <img src={Falshe_loginb} /> */}
            <TransitionsModal />
        </div>
    )
}
export default Falshe_login;