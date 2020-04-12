import React from 'react';
import s from '../bag.module.css'

const ErrorID = (props) => {
    let data_bag = [
        { number="1", error="Ошибка 10", textError="Ошибка  <br />ппц" },
        { number="2", error="Ошибка 1ddd0", textError="dddddddddddddddddd ппц" },
        { number="3", error="Ошибка 1fff0", textError="Ошибка ппц" },
        { number="4", error="Ошибка fff10", textError="Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
        { number="5", error="Ошибка 1ddd0", textError="Ошибка  <br />ппц" },
    ]
    return (
        <div>
            <div className={s.grid_bag}>
                <div className={s.grid_bag1}>
                    <span>{data_bag.number}</span>
                </div>
                <div className={s.grid_bag2}><span>{data_bag.error}</span></div>
                <div className={s.grid_bag3}><span>{data_bag.textError}</span></div>
            </div>
        </div>
    )
}
export default ErrorID;

