import {useEffect, useState} from "react";
import { tagsAtom, addTag } from '@/store/tag'
import { useStore } from '@nanostores/react'
import {TagBadge} from "@/components/atoms/TagBadge";
import {nanoid} from "nanoid";
import {addCardTag, deleteCardTag, UpdateLocalStorage} from "@/store/card";

export const TodoTags = ({card, tags}) => {
    const allTags = useStore(tagsAtom);
    const [Tags, setTags] = useState(tags)
    const [tagName, setTagName] = useState("")

    const addTagInCard = (tag) => {
        addCardTag(card, tag);
        setTags(prev => [...prev, tag])
    };

    const deleteTag = (tag) => {
        deleteCardTag(card, tag)
        setTags(prev => prev.filter(x => x._id !== tag._id))
    };

    const newTag = (e) => {
        if(e.code === "Enter" || e.key === "Enter"){
            const newTag = {
                name: tagName,
                _id: nanoid(5)
            }
            addTag(newTag);
            addTagInCard(newTag);
            setTagName("");
            UpdateLocalStorage()
        }
        // e.preventDefault();

    }

    return (
        <div className="card-actions justify-end">
            { Tags.map((tag) => <TagBadge key={tag._id} tag={tag} deleteTag={deleteTag} />) }
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1">Add tag</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64">
                    <li>
                        {/*<form onSubmit={(e) => newTag(e)}>*/}
                        {/*</form>*/}
                        <input className="input input-bordered"
                               type="text"
                               value={tagName}
                               placeholder="nouveau tag"
                               onChange={(e) => setTagName(e.target.value)}
                                onKeyUp={newTag}
                        />

                    </li>
                        {
                        allTags.map((tag) =>
                            <li
                                key={`${card._id}-${tag._id}`}
                                onClick={() => addTagInCard(tag)}
                            >
                                <a>{tag.name}</a>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
