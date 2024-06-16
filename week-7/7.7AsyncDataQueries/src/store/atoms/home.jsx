import {atom, selector} from "recoil"


// what if values are fetched from a backend call
export const homeAtom = atom({
    key : "homeAtom",
    default : selector({
        key:"homeAtomSelector",
        get:async ({get})=>{
            const res = await axios.get("ajxnskmx.com")
            return res.data;    
        }
    })
})
