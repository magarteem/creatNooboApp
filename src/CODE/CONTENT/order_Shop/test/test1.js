import React from 'react';
import s from '../../today/bag/bag.module.css'
import {Test1_ActioaCreator} from '../../../../redux/test_1_Reduser'


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

const Test1 = (props) => {
    debugger
    let test_1_fu = props.data.test1.test1_today.map(el => <ErrorID id={el.number} err={el.error} text={el.textError} />)

    let Href = React.createRef();
    let Test1_Change_bag = () => {
        let text_test1 = Href.current.value;
        let action = Test1_ActioaCreator(text_test1);
        props.dispatch(action) 
    }
    return (
        <div style={{ color: "red" }}>
            {test_1_fu}
            <p><textarea ref={Href} value={props.data.test1.textarea} onChange={Test1_Change_bag} /><button>dddd</button></p>
        </div>
    )
}
export default Test1;