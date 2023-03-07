import React, {FC, ReactChildren, useRef, useState} from "react";

// <Edit></Edit>
export type EditProps = {
    value?: any,
    placeHolder: string
    children?: ChildNode
    onUpdate?: (value:string) => void
}


export const Edit : FC<EditProps> = ({value, placeHolder,children, onUpdate}) => {
    const [edit,setEdit] = useState(value)
    const ref = useRef<HTMLDivElement>()
    const enabled = () => {
        ref.current.contentEditable = 'true'
        ref.current.focus()
    }

    const onFocus = () => {
        console.log("Focus")
    }

    const save = (e) => {
        console.log("save")
        console.log(e.target.textContent.length)
        setEdit(e.target.textContent)
    }

    return (
        <div ref={ref} onDoubleClick={enabled} onFocus={onFocus} onBlur={save}>
            {edit ? edit : (
                <span className='text-base-300/20'>{placeHolder}</span>
            )}
        </div>
    )
}
