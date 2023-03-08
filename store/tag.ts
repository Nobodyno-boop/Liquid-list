import { map, action } from 'nanostores';
import { nanoid } from "nanoid";

export type TagState = {
    _id: string,
    name: string,
};

export const tags = map<TagState[]>([]);

export const addTag = action(tags, 'addTag', (store, name) => {
    const tag: TagState = {
        _id: nanoid(5),
        name: name
    };
    const tags = store.get();
    tags.push(tag)
    store.set(tags);
    return store.get();
});

export const removeTag = action(tags, 'removeTag', (store, id) => {
    const tags = store.get();
    const newStore = tags.filter((tag) => tag._id !== id);
    store.set(newStore);
    return store.get();
});

export const editTagName = action(tags, 'editTag', (store, name, id) => {
    const tags = store.get();
    const tagArrayId = tags.findIndex(tag => tag._id === id);
    tags[tagArrayId].name = name;
    store.set(tags);
    return store.get()
});