import { useState} from "react";
import { tags, addTag } from '@/store/tag'
import { useStore } from '@nanostores/react'
import {TagBadge} from "@/components/atoms/TagBadge";
import {nanoid} from "nanoid";
import {addCardTag, deleteCardTag} from "@/store/card";

export const TodoTags = ({card}) => {
    const allTags = useStore(tags);
    const [tagName, setTagName] = useState("")

    const addTagInCard = (tag) => {
        addCardTag(card._id, tag);
    };

    const deleteTag = (tag) => {
        deleteCardTag(card._id, tag)
    };

    const newTag = (e) => {
        e.preventDefault();
        const newTag = {
            name: tagName,
            _id: nanoid(5)
        }
        addTag(newTag);
        addTagInCard(newTag);
        setTagName("");
    }

    return (
        <div className="card-actions justify-end">
            { card.tags.map((tag) => <TagBadge key={tag._id} tag={tag} deleteTag={deleteTag} />) }
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