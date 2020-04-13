const ADD_DATA_BAG = 'ADD_DATA_BAG'
const UPDATE_TODAY_TEXTAREA = 'UPDATE_TODAY_TEXTAREA'
const DELL_BAG_COMMON = 'DELL_BAG_COMMON'
const DELL_ITEM_COMMON = 'DELL_ITEM_COMMON'

let initialState = {
    common_data_bag: {
        data_bag: [
            { number: 1, error: "Ошибка 10", textError: "Ошибка  <br />ппц" },
            { number: 2, error: "Ошибка 1ddd0", textError: "dddddddddddddddddd ппц" },
            { number: 3, error: "Ошибка 1fff0", textError: "Ошибка ппц" },
            { number: 5, error: "Ошибка 1ddd0", textError: "Ошибка  <br />ппц" },
            { number: 53232323, error: "edd0", textError: "Ошибка eeeeeeeeeeeeeeeeeeeeeeппц" },
        ],
        textarea: "common_data_bag",
    },
    dune_data_bag: {
        dune_dag: [
            { number: 1, error: "dune_data_dag 10", textError: "Ошибка  <br />ппц" },
            { number: 2, error: "dune_data_dag 1ddd0", textError: "dune_dag ппц" },
            { number: 4, error: "dune_data_dag fff10", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
            { number: 15, error: "dune_data_dag 1ddd0", textError: "Ошибка  <br />ппц" },
        ],
    },
}
const todayReduser = (state = initialState, action) => { // 2 после вызова диспатч  идет в ADD_DATA_BAG если кнопку добавить нажали
    // или в UPDATE_TODAY_TEXTAREA если нужно обновлять текст арею
    // #1 получаем путь от диспатча в переменную state и работает в этом пути state.data_bag.push(temp);  state.textarea = '';
    switch (action.type) {
        case ADD_DATA_BAG:// 3.б при нажатии на добавить пушим в state.data_bag созданный temp, где textError это взятый из state.textarea когда писали текст через UPDATE_TODAY_TEXTAREA
            let temp = {
                number: 8,
                error: "8888888888",
                textError: state.common_data_bag.textarea
            }
            state.common_data_bag.data_bag.push(temp);
            state.common_data_bag.textarea = '';
            return state;
        case UPDATE_TODAY_TEXTAREA:   // 3.а при обновлении  текстареи в стайт заносится action.ubdate_Textarea полученный через text_value в change_Bag_ActioaCreator
            state.common_data_bag.textarea = action.ubdate_Textarea; // тут обновляем value textarea в пути state.textarea получая данные от action.ubdate_Textarea
            return state;
        case DELL_BAG_COMMON:// 3.б при нажатии на добавить пушим в state.data_bag созданный temp, где textError это взятый из state.textarea когда писали текст через UPDATE_TODAY_TEXTAREA
            state.common_data_bag.textarea = action.ubdate_Textarea
            return state;
        case DELL_ITEM_COMMON:
            state.common_data_bag.data_bag.splice(state.common_data_bag.textarea, 1)
            return state;
        default:
            return state;
    }
}
//===================== ADD ===========================
export const add_Date_Bag_ActioaCreator = () => { return { type: ADD_DATA_BAG } }
export const change_Bag_ActioaCreator = (text_value) => ({ type: UPDATE_TODAY_TEXTAREA, ubdate_Textarea: text_value })// можно и без  ретурн
//===================== DELL ===========================
export const DAELL_BagCOMMON_ActioaCreator = (text_value) => ({ type: DELL_BAG_COMMON, ubdate_Textarea: text_value })
export const DAEE_itemCOMMON_ActioaCreator = () => ({ type: DELL_ITEM_COMMON })

export default todayReduser;