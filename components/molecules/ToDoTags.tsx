import { useState, useEffect } from "react";
import { tags, addTag, removeTag } from '@/store/tag'
import { useStore } from '@nanostores/react'
import {TagBadge} from "@/components/atoms/TagBadge";
export const TodoTags = ({initTags}) => {
    const allTags = useStore(tags);
    const [todoTags, setTodoTags] = useState(initTags);
    const [tagName, setTagName] = useState("")

    const addTodoTag = (id) => {
        const todoTag = todoTags.find((t) => t._id === id);
        if(!todoTag && id !== "") {
            const tag = allTags.find((t) => t._id === id);
            setTodoTags((value) => [...value, tag]);
        }
    };

    const deleteTag = (id) => {
      setTodoTags(todoTags.filter((tag) => tag._id !== id));
    };

    const newTag = (e) => {
        e.preventDefault();
        addTag(tagName);
        const newTag = allTags.find((t) => t.name === tagName);
        addTodoTag(newTag._id);
        setTagName("");
    }

    return (
        <div className="card-actions justify-end">
            { todoTags.map((tag) => <TagBadge key={tag._id} tag={tag} deleteTag={deleteTag} />) }
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1">Add tag</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <form onSubmit={(e) => newTag(e)}>
                            <input  type="text" value={tagName} onChange={(e) => setTagName(e.target.value)}/>
                        </form>
                    </li>
                        {
                        allTags.map((tag) =>
                            <li
                                key={tag._id}
                                onClick={() => addTodoTag(tag._id)}
                            >
                                <a>{tag.name}</a>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}