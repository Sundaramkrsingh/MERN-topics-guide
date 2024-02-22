import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios'

export const todosAtom = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: 'asyncSelectorFamily',
        get: (id) => async () => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return res.data.todo
        }
    })
})