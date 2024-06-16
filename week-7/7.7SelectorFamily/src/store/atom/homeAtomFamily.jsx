import {atomFamily,selectorFamily} from "recoil"
import axios from "axios"



// What if the data is coming from the backend
export const homeAtomFamily = atomFamily({
    id:"homeAtomFamily",
    default: selectorFamily({
        id:"homeSelectorFamily",
        get: id => async({get}) => {
            const res = await axios.get(`https://sum-server.100xdevs.comkmkm/todos?id=${id}`);
            return res.data;
        }
    })
})

// Alternate syntax
export const homeAtomFamily2 = atomFamily({
    id:"homeAtomFamily2",
    default: selectorFamily({
        id:"homeSelectorFamily2",
        get: function(id){
            return async function({get}){
                const res = await axios.get(`https://sum-server.100xdevs.comkmkm/todos?id=${id}`);
                return res.data;
            }
        }
    })
})