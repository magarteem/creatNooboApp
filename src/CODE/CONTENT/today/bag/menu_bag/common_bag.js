import React from 'react';
import s from '../bag.module.css'

let ErrorID = (props) => {
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

const Common_bag = (props) => {    
    debugger
    let map_menuError = props.data.today.data_bag.map(el => <ErrorID id={el.number} err={el.error} text={el.textError} />)
    return(
        <div>
            {map_menuError}
        </div>
    )
}

export default Common_bag