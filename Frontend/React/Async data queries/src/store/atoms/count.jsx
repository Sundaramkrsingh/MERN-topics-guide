import { atom, selector } from 'recoil'
import axios from 'axios'

export const countAtom = atom({
    key: 'countAtom',
    default: selector({
        key: 'selectorAtom',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        }
    })
})
