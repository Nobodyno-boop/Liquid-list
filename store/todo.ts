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
