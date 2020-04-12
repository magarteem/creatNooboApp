const DELL_BAGG = 'DELL_BAGG'
const DELL_ITEM = 'DELL_ITEM'
// const UPDATE_TODAY_TEXTAREA = 'UPDATE_TODAY_TEXTAREA'

const Dell_Reduser = (state, action) => { // 2 после вызова диспатч  идет в ADD_DATA_BAG если кнопку добавить нажали
        // или в UPDATE_TODAY_TEXTAREA если нужно обновлять текст арею
        debugger
        // #1 получаем путь от диспатча в переменную state и работает в этом пути state.data_bag.push(temp);  state.textarea = '';
        switch (action.type) {
                case DELL_BAGG:// 3.б при нажатии на добавить пушим в state.data_bag созданный temp, где textError это взятый из state.textarea когда писали текст через UPDATE_TODAY_TEXTAREA
                     console.log(action.ubdate_Textarea)
                     state.textarea = action.ubdate_Textarea
                     return state;
                case DELL_ITEM:
                     state.comigo_data_dag.splice(state.textarea, 1)
                     return state;
                default:
                     return state;
        }
        debugger
}


export const DAEE_Bag_ActioaCreator = (text_value) => ({ type: DELL_BAGG, ubdate_Textarea: text_value })// можно и без  ретурн
export const DAEE_item_ActioaCreator =()=>({
        type: DELL_ITEM
})

export default Dell_Reduser;