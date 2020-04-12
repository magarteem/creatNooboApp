import React from 'react';
import s from '../bag.module.css'
import {DAELL_BagCOMMON_ActioaCreator,DAEE_itemCOMMON_ActioaCreator} from '../../../../../redux/dell_item_COMMON'

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

    let Href = React.createRef();
    let Deell_bag_common = () => {
        let text_value = Href.current.value;
        let action = DAELL_BagCOMMON_ActioaCreator(text_value);
        props.dispatch(action) 
    }
    let Deell_item_common=()=>{
        let action = DAEE_itemCOMMON_ActioaCreator();;
        props.dispatch(action) 
    }

    let map_menuError = props.data.today.data_bag.map(el => <ErrorID id={el.number} err={el.error} text={el.textError} />)
    return(
        <div>
            {map_menuError}
            <p>
                <textarea ref={Href} value={props.data.today.textarea} onChange={Deell_bag_common} />
                <button onClick={Deell_item_common}>dddd</button>
            </p>
        </div>
    )
}

export default Common_bag