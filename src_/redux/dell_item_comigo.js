const DELL_ITEM = "DELL_ITEM"

const DeLL_item = (state, action) => {  //пчм пустой  стэйт тут?
    debugger
    switch(action.type){
        case DELL_ITEM:
            console.log("123")
            return state;
    }

}


export const delItem = (numb_dell)=>({
    type: DELL_ITEM,
    numberDell:numb_dell
})


export default DeLL_item