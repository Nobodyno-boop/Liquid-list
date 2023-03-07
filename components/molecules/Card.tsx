import {EditText} from "@/components/atoms/EditText";
import {TodoList} from "@/components/molecules/todoList";
import {FC, useState} from "react";
import {CardState, getCardTodos, updateCardName} from "@/store/card";
import {createTodo, TodoState} from "@/store/todo";

export const Card: FC<{state:CardState}> = ({state}) => {
    const [list, setList] = useState<TodoState[]>(state.todos)
    const [title, setTitle] = useState(state.name)

    const createList = () => {
        const todo = createTodo(state._id)
        if(todo){
            // get all todos to avoid duplicate todo on reload
            const todos = getCardTodos(state._id)
            setList([...todos])
        }
    }

  return (
      <div className="card w-96 bg-primary shadow-xl text-neutral">
          <div className="card-body">
              <h2 className="card-title">
                  <EditText
                      placeHolder={'title'}
                      value={title}
                      onUpdate={value => updateCardName(state._id, value)}
                  />
              </h2>
              {list.length > 0 ? (
                <div className='w-full'>
                    <button className="btn btn-square btn-outline w-full mb-4" onClick={createList}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"/></svg>
                        <span>ajouter une todo</span>
                    </button>
                    <TodoList todos={list} cardId={state._id} />
                </div>
              ) : (
                  <div className='h-full' onClick={createList}>
                      <button className="btn btn-outline max-w-3xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM9 7V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Zm4 11v-2h2.075Q11 17.5 11 18t.075 1H9Zm0-6v-2h9q-1.425 0-2.675.537T13.125 13H9Z"/></svg>
                      </button>

                  </div>
              )}
          </div>
      </div>
  )
}
