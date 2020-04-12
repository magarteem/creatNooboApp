import React from 'react';
import s from '../bag.module.css'
// import {dell_BagDUNE_ActioaCreator} from '../../../../../redux/dell_reduser'


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

const Dune_bag = (props) => {  
    let map_menuError = props.data.today.dune_dag.dune_data_dag.map(el => <ErrorID id={el.number} err={el.error} text={el.textError} />)
    return(
        <div>
            {map_menuError}
        </div>
    )
}

export default Dune_bag