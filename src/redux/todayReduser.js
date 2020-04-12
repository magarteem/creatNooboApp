const ADD_DATA_BAG = 'ADD_DATA_BAG'
const UPDATE_TODAY_TEXTAREA = 'UPDATE_TODAY_TEXTAREA'

const todayReduser = (state, action) => { // 2 после вызова диспатч  идет в ADD_DATA_BAG если кнопку добавить нажали
    // или в UPDATE_TODAY_TEXTAREA если нужно обновлять текст арею

    // #1 получаем путь от диспатча в переменную state и работает в этом пути state.data_bag.push(temp);  state.textarea = '';
    
    switch (action.type) {
        case ADD_DATA_BAG:// 3.б при нажатии на добавить пушим в state.data_bag созданный temp, где textError это взятый из state.textarea когда писали текст через UPDATE_TODAY_TEXTAREA
            let temp = {
                number: 8,
                error: "8888888888",
                textError: state.textarea
            }
            state.data_bag.push(temp);
            state.textarea = '';
            console.log("123")
            return state;
        case UPDATE_TODAY_TEXTAREA:   // 3.а при обновлении  текстареи в стайт заносится action.ubdate_Textarea полученный через text_value в change_Bag_ActioaCreator
            state.textarea = action.ubdate_Textarea; // тут обновляем value textarea в пути state.textarea получая данные от action.ubdate_Textarea
            return state;
        default:
            return state;
    }
}
// 1 както хз как вызывает диспатч при попытке добавить запись
export const add_Date_Bag_ActioaCreator = () => { //Ч\З ретурн
    return {
        type: ADD_DATA_BAG
    }
}

// 1 както хз как вызывает диспатч передавая тип и текст из текст ареа при вводе
export const change_Bag_ActioaCreator = (text_value) => ({ type: UPDATE_TODAY_TEXTAREA, ubdate_Textarea: text_value })// можно и без  ретурн

export default todayReduser;