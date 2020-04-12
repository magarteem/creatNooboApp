import React from 'react';
import s from '../bag.module.css'
import { DAEE_Bag_ActioaCreator, DAEE_item_ActioaCreator } from '../../../../../redux/dell_item_comigo';


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
    
    let Href = React.createRef();
    let Deell_bag = () => {
        let text_value = Href.current.value;
        let action = DAEE_Bag_ActioaCreator(text_value);
        props.dispatch(action) 
    }
    let Deell_item=()=>{
        let action = DAEE_item_ActioaCreator();;
        props.dispatch(action) 
    }

    let map_menuError = props.data.comigo_dag.comigo_data_dag.map(el => 
    <ErrorID
        id={el.number} err={el.error} text={el.textError}
    />)
    return (
        <div>
            {map_menuError}
            <p>
                <textarea ref={Href} value={props.data.comigo_dag.textarea} onChange={Deell_bag} />
                <button onClick={Deell_item}>dddd</button>
            </p>
        </div>
    )

}

export default Comigo_bag