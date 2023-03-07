import { useState, useEffect } from "react";
import { tags, addTag, removeTag } from '@/store/tag'
import { useStore } from '@nanostores/react'
import {TagBadge} from "@/components/atoms/TagBadge";
export const TodoTags = ({initTags}) => {
    const allTags = useStore(tags);
    const [todoTags, setTodoTags] = useState(initTags);

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

    return (
        <div className="card-actions justify-end">
            { todoTags.map((tag, index) => <TagBadge key={tag._id} tag={tag} deleteTag={deleteTag}/>) }
            <select
                className="select select-bordered select-primary select-xs w-full max-w-xs"
                onChange={(e) => addTodoTag(e.target.value)}
            >
                <option value={""}></option>
                {allTags.map(
                    (tag) => <option key={tag._id} value={tag._id}>{tag.name}</option>
                )}
            </select>
        </div>
    )
}