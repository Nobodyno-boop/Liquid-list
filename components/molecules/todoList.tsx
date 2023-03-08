import {FC, Key, useState} from "react";
import {TodoState, updateTodo, deleteTodo, createTodo} from "@/store/todo";
import {EditText} from "@/components/atoms/EditText";
import {getCardTodos} from "@/store/card";

export const TodoList: FC<{todos: TodoState[], cardId: string}> = ({todos, cardId}) => {
    const [list, setList] = useState<TodoState[]>(todos)

    const editTextTodo = (id, text) => {
        console.log("update", id, text)
        updateTodo(cardId,id, {name: text})
    }

    const onCheck = (id, bool) => {
        updateTodo(cardId,id, {done: bool})
    }

    const onDeleteTodo = (_id: string) => {
        deleteTodo(cardId, _id)
        const todos = getCardTodos(cardId)
        setList(e => e.filter(x => x._id !== _id))
    }

    const createList = () => {
        const todo = createTodo(cardId)
        if(todo){
            // get all todos to avoid duplicate todo on reload
            const todos = getCardTodos(cardId)
            setList([...todos])
        }
    }

    return (
        <>
            <button className="btn btn-square btn-outline w-full mb-4" onClick={createList}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"/></svg>
                <span>ajouter une todo</span>
            </button>
            <ul className="list-outside text-base-100 flex flex-col gap-y-3">
                {list.map((value, index) => (
                    <li key={value._id} className='flex flex-row gap-x-3'>
                        <input type="checkbox" defaultChecked={value.done} onChange={e => onCheck(value._id, e.target.checked)} className="checkbox" />
                        <div className="text-primary break-all">
                            <EditText
                                placeHolder={'todo'}
                                value={value.name}
                                size='xs'
                                onUpdate={(v) => editTextTodo(value._id, v) }
                            />
                        </div>
                        <button className="btn btn-square btn-xs ml-auto" onClick={() => onDeleteTodo(value._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </li>
                ))}

            </ul>
        </>
    )
}
