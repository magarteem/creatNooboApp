const DELL_BAG_COMMON = 'DELL_BAG_COMMON'
const DELL_ITEM_COMMON = 'DELL_ITEM_COMMON'
// const UPDATE_TODAY_TEXTAREA = 'UPDATE_TODAY_TEXTAREA'

const Dell_COMMON_Reduser = (state, action) => { // 2 после вызова диспатч  идет в ADD_DATA_BAG если кнопку добавить нажали
        // или в UPDATE_TODAY_TEXTAREA если нужно обновлять текст арею
        debugger
        // #1 получаем путь от диспатча в переменную state и работает в этом пути state.data_bag.push(temp);  state.textarea = '';
        switch (action.type) {
                case DELL_BAG_COMMON:// 3.б при нажатии на добавить пушим в state.data_bag созданный temp, где textError это взятый из state.textarea когда писали текст через UPDATE_TODAY_TEXTAREA
                     console.log(action.ubdate_Textarea)
                     state.textarea = action.ubdate_Textarea
                     return state;
                case DELL_ITEM_COMMON:
                     state.data_bag.splice(state.textarea, 1)
                     return state;
                default:
                     return state;
        }
}


export const DAELL_BagCOMMON_ActioaCreator = (text_value) => ({ type: DELL_BAG_COMMON, ubdate_Textarea: text_value })// можно и без  ретурн
export const DAEE_itemCOMMON_ActioaCreator =()=>({
        type: DELL_ITEM_COMMON
})

export default Dell_COMMON_Reduser;