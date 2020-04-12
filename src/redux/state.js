import todayReduser from './todayReduser'
import Dell_Reduser from './dell_item_comigo'
import Dell_COMMON_Reduser from './dell_item_COMMON'
// import test_1_Reduser from './test_1_Reduser'


let store = {
    _state: {
        shoop: {
            Ord_Shoop: [
                { path: "Buy_subscription", name: "Заказ" },
                { path: "test1", name: "БД" },
                { path: "test2", name: "КК" },
                { path: "ord", name: "Оформление" },
                { path: "kontakt", name: "Контакты" },
                { path: "time_work", name: "Время работы" },
                { path: "books", name: "Буквы" }
            ],
        },
        test1: {
            test1_today: [
                { number: 1, error: "Ошибка 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "Ошибка 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 3, error: "Ошибка 1fff0", textError: "Ошибка ппц" },
                { number: 5, error: "Ошибка 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 53232323, error: "edd0", textError: "Ошибка eeeeeeeeeeeeeeeeeeeeeeппц" },
            ],
            textarea: "Выберите приставку и опишите её баг",
        },
        test2: {
            test2_today: [
                { number: 1, error: "comigo_dag 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "comigo_dag 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 4, error: "comigo_dag comigo", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
            ],
            textarea: "55555555555555",
        },
        today: {
            data_today: [
                { path: "order", name: "Заказы" },
                { path: "tehno", name: "Технишн" },
                { path: "bag", name: "Баги" },
                { path: "aktion", name: "Акции" },
                { path: "info", name: "Инфо" }
            ],
            textarea: "Выберите приставку и опишите её баг",
            data_bag: [
                { number: 1, error: "Ошибка 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "Ошибка 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 3, error: "Ошибка 1fff0", textError: "Ошибка ппц" },
                { number: 5, error: "Ошибка 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 53232323, error: "edd0", textError: "Ошибка eeeeeeeeeeeeeeeeeeeeeeппц" },
            ],
                dune_dag: [
                    { number: 1, error: "dune_data_dag 10", textError: "Ошибка  <br />ппц" },
                    { number: 2, error: "dune_data_dag 1ddd0", textError: "dune_dag ппц" },
                    { number: 4, error: "dune_data_dag fff10", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
                    { number: 15, error: "dune_data_dag 1ddd0", textError: "Ошибка  <br />ппц" },
                ],
        },
        comigo_dag: {
            comigo_data_dag: [
                { number: 1, error: "comigo_dag 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "comigo_dag 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 4, error: "comigo_dag comigo", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
            ],
            textarea:"Какой элемент удалить?"
        },
    },
    _callSubscriber(){
    },
    getState() { return this._state },
    subscribe(observer) { this._callSubscriber = observer; },

    dispatch(action) {
        debugger
        // #1 this._state.today будет равен пути в редюсере на todayReduser в переменной state
        this._state.today = todayReduser(this._state.today, action)
        this._state.today = Dell_COMMON_Reduser(this._state.today, action)
        this._state.comigo_dag = Dell_Reduser(this._state.comigo_dag, action)

        this._callSubscriber(this._state);
    }
}

export default store;