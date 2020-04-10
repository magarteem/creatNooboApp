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
const Comigo_bag = (props) => {
    debugger
    let map_menuError = props.data.today.comigo_dag.comigo_data_dag.map(el => 
    <ErrorID
        id={el.number} err={el.error} text={el.textError}
    />)
    return (
        <div>
            {map_menuError}
        </div>
    )

}

export default Comigo_bag