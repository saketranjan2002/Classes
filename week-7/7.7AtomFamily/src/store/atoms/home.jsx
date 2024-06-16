import {atomFamily, selector} from "recoil"
import {TODOS} from "../../todos"

export const homeAtomFamily = atomFamily({
    key : "homeAtomFamily",
    default : (id) => {
        return TODOS.find(x => x.id===id);
    }

})


// In atomFamily the default attribute is a function