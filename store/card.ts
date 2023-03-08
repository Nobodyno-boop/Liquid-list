import {persistentAtom} from "@nanostores/persistent";
import {Category, TodoState} from "@/store/todo";
import {nanoid} from "nanoid";

export type CardState = {
    _id: string
    name: string
    categories: Category[]
    todos : TodoState[]
}

// https://github.com/nanostores/persistent#primitive-store
export const getCards = persistentAtom<CardState[]>('cards', [], {
    encode (value) {
        return JSON.stringify(value)
    },
    decode (value ) {
        try {
            return JSON.parse(value)
        } catch(e) {
            return value
        }
    }
})

export const UpdateLocalStorage = (value: any = null) => {
    getCards.set(value ? value : getCards.get())
}
export const getCardById = (id:string) => {
    return getCards.get().find(v => v._id === id)
}
export const getCardTodos = (id) => {
    return getCardById(id)?.todos
}

export const updateCardName = (id:string, name:string) => {
    const card = getCardById(id)
    if(card){
        card.name = name
    }

    UpdateLocalStorage()
}

export const createCard = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getCards.set([...getCards.get(), {_id: nanoid(6) ,name:'',categories: [], todos: []}])
    return getCards.get()
}

export const deleteCard = (cardId) => {
    const cards = getCards.get().filter(card => card._id !== cardId)
    UpdateLocalStorage(cards)
}
