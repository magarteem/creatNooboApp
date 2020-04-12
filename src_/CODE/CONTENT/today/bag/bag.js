import React from 'react';
import s from './bag.module.css'
import { add_Date_Bag_ActioaCreator, change_Bag_ActioaCreator } from '../../../../redux/todayReduser'
import { Route, NavLink } from 'react-router-dom';
import Dune_bag from './menu_bag/dune_bag'
import Common_bag from './menu_bag/common_bag'
import Comigo_bag from './menu_bag/comigo_bag'

let ErrorID = (props) => { /**/
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



const Bag = (props) => {
    let Href = React.createRef();
    let Alert = () => { //показать вывод в тексареа
        // props.addData_bag()
        props.dispatch(add_Date_Bag_ActioaCreator())
    }

    let Change_bag = () => {// добавить баг запись
        let text_value = Href.current.value;
        // props.ubdateTodayTextarea(text_value)
        let action = change_Bag_ActioaCreator(text_value);
        props.dispatch(action) 
    }

    return (
        <div className={s.grid}>
            <div className={s.grid1}>
                <NavLink exact to="/today/bag"><div>ОБЩИЕ</div></NavLink>
                <NavLink to="/today/bag/dune"><div>Dune</div></NavLink>
                <NavLink to="/today/bag/comigo"><div>Comigo</div></NavLink>
                <p>Samsung</p>
                <p>LG</p>
                <p>Android</p>
            </div>
            <div className={s.grid2}>
                <Route exact path="/today/bag/" render={() => <Common_bag data={props.data} dispatch={props.dispatch} />} />
                <Route  path="/today/bag/dune" render={() => <Dune_bag data={props.data} dispatch={props.dispatch} />} />
                <Route  path="/today/bag/comigo" render={() => <Comigo_bag data={props.data} dispatch={props.dispatch} />} />
            </div>
            <div className={s.grid3}>
                <p><textarea ref={Href} value={props.data.today.textarea} onChange={Change_bag} /><button onClick={Alert}>dddd</button></p>
            </div>
        </div >
    )
}
export default Bag;







{/*<div className={s.grid2}>
 <div className={s.grid_bag}>
    <div className={s.grid_bag1}>
        <span>#6</span>
    </div>
    <div className={s.grid_bag2}><span>Ошибка 10</span></div>
    <div className={s.grid_bag3}><span>Ошибка  <br />ппц</span></div>
</div>
<div className={s.grid_bag}>
    <div className={s.grid_bag1}>
        <span>#5</span>
    </div>
    <div className={s.grid_bag2}><span>Ошибка 10</span></div>
    <div className={s.grid_bag3}><span>dddddddddddddddddd ппц</span></div>
</div>
<div className={s.grid_bag}>
    <div className={s.grid_bag1}>
        <span>#4</span>
    </div>
    <div className={s.grid_bag2}><span>Ошибка 10</span></div>
    <div className={s.grid_bag3}><span>Ошибка ппц</span></div>
</div>
<div className={s.grid_bag}>
    <div className={s.grid_bag1}>
        <span>#3</span>
    </div>
    <div className={s.grid_bag2}><span>Ошибка 10</span></div>
    <div className={s.grid_bag3}><span>Ошибка <br /> ппц</span></div>
</div>
<div className={s.grid_bag}>
    <div className={s.grid_bag1}>
        <span>#2</span>
    </div>
    <div className={s.grid_bag2}><span>Ошибка 1323230</span></div>
    <div className={s.grid_bag3}><span>Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц</span></div>
</div>
<div className={s.grid_bag}>
    <div className={s.grid_bag1}>
        <span>#1</span>
    </div>
    <div className={s.grid_bag2}><span>Ошибка 1s0</span></div>
    <div className={s.grid_bag3}><span>Ошибка dddddddddddddd <br /> <br />ddddddddddddddddddппц</span></div>
</div> 
</div >*/}