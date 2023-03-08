import {action, actionFor, atom, mapTemplate} from "nanostores";
import {nanoid} from "nanoid";
import {getCardTodos, UpdateLocalStorage} from "./card";

export type TodoState = {
    _id: string
    name: string
    done: boolean
}

export const todos = atom<TodoState[]>([])
export const updateTodo = (cardId, todoId, update) => {
    const cardsTodos = getCardTodos(cardId)
    if(cardsTodos){
        const obj = cardsTodos.find(v => v._id === todoId)
        if(update?.name){
            obj.name = update.name
        }

        if(update?.done){
            obj.done = update.done
        }

        // Update list
        // notify
        UpdateLocalStorage()
        return
    }
}


// Need to use nanoid for field _id (already install)
// https://github.com/ai/nanoid#nano-id

export const createTodo = (idCard) => {
// TODO: create todo
    const cardTodos = getCardTodos(idCard)
    const todo = {done: false, name: '', _id: nanoid(6)}
    if(cardTodos) {
        cardTodos.push(todo)
        UpdateLocalStorage()
        return todo
    }

    return null
}
