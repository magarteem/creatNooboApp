import { createStore, combineReducers } from "redux";
import todayReduser from './common_REDUSER'
import Dell_Reduser from './dell_item_comigo_REDUSER'

let redusers = combineReducers({
    today: todayReduser,
    comigo_dag: Dell_Reduser
})

let store = createStore(redusers);
export default store
