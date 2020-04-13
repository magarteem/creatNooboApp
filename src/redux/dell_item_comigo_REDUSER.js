const DELL_BAGG = 'DELL_BAGG'
const DELL_ITEM = 'DELL_ITEM'

let initialState = {
        comigo_data_dag: [
                { number: 1, error: "comigo_dag 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "comigo_dag 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 4, error: "comigo_dag comigo", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
        ],
        textarea: "Какой элемент удалить?"
}
const Dell_Reduser = (state = initialState, action) => { // 2 после вызова диспатч  идет в ADD_DATA_BAG если кнопку добавить нажали
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
}


export const DAEE_Bag_ActioaCreator = (text_value) => ({ type: DELL_BAGG, ubdate_Textarea: text_value })// можно и без  ретурн
export const DAEE_item_ActioaCreator = () => ({
        type: DELL_ITEM
})

export default Dell_Reduser;