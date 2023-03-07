import {FC, Key, useState} from "react";
import {TodoState, updateTodo} from "@/store/todo";
import {nanoid} from "nanoid";
import {EditText} from "@/components/atoms/EditText";
import {useStore} from "@nanostores/react";

export const TodoList: FC<{todos: TodoState[], cardId: string}> = ({todos, cardId}) => {
    const editTextTodo = (id, text) => {
        console.log("update", id, text)
        updateTodo(cardId,id, {name: text})
    }

    const onCheck = (id, bool) => {
        updateTodo(cardId,id, {done: bool})
    }

    return (
        <ul className="text-base-100 flex flex-col gap-y-3">
            {todos.map((value, index) => (
                <li key={index} className='inline-flex gap-x-3'>
                    <input type="checkbox" defaultChecked={value.done} onChange={e => onCheck(value._id, e.target.checked)} className="checkbox" />
                    <h3>
                        <EditText
                            placeHolder={'todo'}
                            value={value.name}
                            size='xs'
                            onUpdate={(v) => editTextTodo(value._id, v) }
                        />
                    </h3>
                </li>
            ))}

        </ul>
    )
}
