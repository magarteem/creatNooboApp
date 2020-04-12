import todayReduser from './todayReduser'
import DeLL_item from './dell_item_comigo'

let store = {
    _state: {
        shoop:{
            Ord_Shoop: [
                { path: "Buy_subscription", name: "Заказ" },
                { path: "test2", name: "БД" },
                { path: "kk", name: "КК" },
                { path: "ord", name: "Оформление" },
                { path: "kontakt", name: "Контакты" },
                { path: "time_work", name: "Время работы" },
                { path: "books", name: "Буквы" }
            ],
        },
        today: {
            data_today: [
                { path: "order", name: "Заказы" },
                { path: "tehno", name: "Технишн" },
                { path: "bag", name: "Баги" },
                { path: "aktion", name: "Акции" },
                { path: "info", name: "Инфо" }
            ],
            data_bag: [
                { number: 1, error: "Ошибка 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "Ошибка 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 3, error: "Ошибка 1fff0", textError: "Ошибка ппц" },
                { number: 5, error: "Ошибка 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 53232323, error: "edd0", textError: "Ошибка eeeeeeeeeeeeeeeeeeeeeeппц" },
            ],
            dune_dag: {
                dune_data_dag: [
                    { number: 1, error: "dune_data_dag 10", textError: "Ошибка  <br />ппц" },
                    { number: 2, error: "dune_data_dag 1ddd0", textError: "dune_dag ппц" },
                    { number: 4, error: "dune_data_dag fff10", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
                    { number: 15, error: "dune_data_dag 1ddd0", textError: "Ошибка  <br />ппц" },
                ],
                textError:""
            },
            textarea: "Выберите приставку и опишите её баг"
        },
        comigo_dag: {
            comigo_data_dag: [
                { number: 1, error: "comigo_dag 10", textError: "Ошибка  <br />ппц" },
                { number: 2, error: "comigo_dag 1ddd0", textError: "dddddddddddddddddd ппц" },
                { number: 4, error: "comigo_dag comigo", textError: "Ошибка dsdsdsdsdsdsdsssssssss   <br /> <br /> <br />dddddddddddddddddddddd ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
                { number: 15, error: "comigo_dag 1ddd0", textError: "Ошибка  <br />ппц" },
            ],
        },
    },
    _render_Tree() { },
    getState() { return this._state },
    subscribe(observer) { this._render_Tree = observer; },

    dispatch(action) {
        debugger
        this._state.today = todayReduser(this._state.today, action) // #1 this._state.today будет равен пути в редюсере на todayReduser в переменной state
        this._state = DeLL_item(this._state, action)

        this._render_Tree(this._state);
    }
}

export default store;