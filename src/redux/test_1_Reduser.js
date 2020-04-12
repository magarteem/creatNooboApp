let TEST1 = "TEST1"
const test_1_Reduser = (state, action) => {

    switch(action.type){
        case TEST1:
            console.log(action)
    }
}
export default test_1_Reduser
export const Test1_ActioaCreator = (text_test1) => ({ type: TEST1, ubdate_Textarea_test1: text_test1 })// можно и без  ретурн

