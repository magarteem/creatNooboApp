import React from 'react';
import s from '../../today/bag/bag.module.css'

let ErrorID = (props) => {
    debugger
    return (
        <div>
            <div className={s.grid_bag}>
                <div className={s.grid_bag1}>
                    <span>{props.id}</span>
                </div>
                <div className={s.grid_bag2}><span>{props.err}</span></div>
                <div className={s.grid_bag3}><span>{props.text}</span></div>
            </div>
        </div>
    )
}

const Test2 = (props) => {
    let test_2_fu = props.data.test2.test2_today.map(el => <ErrorID id={el.number} err={el.error} text={el.textError} />)

    return (
        <div style={{ color: "red" }}>
            {test_2_fu}
        </div>
    )
}
export default Test2;