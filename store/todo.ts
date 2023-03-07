import {atom, mapTemplate} from "nanostores";
import {nanoid} from "nanoid";
import {persistentAtom} from "@nanostores/persistent";

export type Category = string

export type Todo = {
    _id: string
    name: string
    categories: Category[]
}
// https://github.com/nanostores/persistent#primitive-store
export const todos = persistentAtom<Todo[]>('todos', [], {
    encode: JSON.stringify,
    decode: JSON.parse
})


// Need to use nanoid for field _id (already install)
// https://github.com/ai/nanoid#nano-id

export const createTodo = () => {
// TODO: create todo
}
