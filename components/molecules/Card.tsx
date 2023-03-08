import {EditText} from "@/components/atoms/EditText";
import {TodoList} from "@/components/molecules/todoList";
import {FC, useState} from "react";
import {CardState, deleteCard, getCardTodos, updateCardName} from "@/store/card";
import {createTodo, TodoState} from "@/store/todo";
import {TodoTags} from "@/components/molecules/ToDoTags";

export const Card: FC<{state:CardState}> = ({state}) => {
    const [list, setList] = useState<TodoState[]>(state.todos)
    // const [tags, setTags] = useState<TodoState[]>(state.tags)

    const [title, setTitle] = useState(state.name)

    const onDeleteCard = () => {
        deleteCard(state._id)
    }


  return (
      <div className="card w-96 bg-neutral shadow-xl">
          <div className="card-body">
              <div className="card-actions justify-end">
                  <button className="btn btn-square btn-sm" onClick={onDeleteCard}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
              </div>
              <h2 className="card-title text-primary">
                  <EditText
                      placeHolder={'title'}
                      value={title}
                      onUpdate={value => updateCardName(state._id, value)}
                  />
              </h2>
              <div className='w-full'>
                  <TodoList todos={list} cardId={state._id} />
              </div>
          </div>
            <TodoTags card={state._id} tags={state.tags}/>
      </div>
  )
}
