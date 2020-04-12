import React from 'react';
import s from '../bag.module.css'
import {delItem} from '../../../../../redux/dell_item_comigo'

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




    let dellHref = React.createRef();
    let Change_DELL = () => {
        debugger
        let numb_dell = dellHref.current.value;
       console.log(numb_dell);
       let action = (delItem(numb_dell));
        props.dispatch(action);
    }





    let map_menuError = props.data.today.comigo_dag.comigo_data_dag.map(el => 
    <ErrorID
        id={el.number} err={el.error} text={el.textError}
    />)
    return (
        <div>
            {map_menuError}
            <textarea ref={dellHref}  value="ree"></textarea>
            <button>dell</button>
        </div>
    )

}

export default Comigo_bag