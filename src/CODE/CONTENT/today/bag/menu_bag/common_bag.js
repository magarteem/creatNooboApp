import React from 'react';
import s from '../bag.module.css'
import { DAELL_BagCOMMON_ActioaCreator, DAEE_itemCOMMON_ActioaCreator,  add_Date_Bag_ActioaCreator, change_Bag_ActioaCreator } from '../../../../../redux/common_REDUSER'

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
    let Href_add = React.createRef();
    let Href_dell = React.createRef();
    //add item in common
    let Alert = () => { 
        props.dispatch(add_Date_Bag_ActioaCreator())
    }
    let Change_bag = () => {
        let text_value = Href_add.current.value;
        let action = change_Bag_ActioaCreator(text_value);
        props.dispatch(action)
    }
    //dell item in common
      let Deell_bag_common = () => {
        let text_value = Href_dell.current.value;
        let action = DAELL_BagCOMMON_ActioaCreator(text_value);
        props.dispatch(action)
    }
    let Deell_item_common = () => {
        let action = DAEE_itemCOMMON_ActioaCreator();;
        props.dispatch(action)
    }
    let map_menuError = props.data.today.common_data_bag.data_bag.map(el => <ErrorID id={el.number} err={el.error} text={el.textError} />)
    return (
        <div>
            {map_menuError}
            <div className={s.grid3}>
                <p><textarea ref={Href_add} value={props.data.today.common_data_bag.textarea} onChange={Change_bag} /><button onClick={Alert}>ADD</button></p>
            </div>
            <p>
                <textarea ref={Href_dell} value={props.data.today.common_data_bag.textarea} onChange={Deell_bag_common} />
                <button onClick={Deell_item_common}>DELL</button>
            </p>
        </div>
    )
}

export default Common_bag