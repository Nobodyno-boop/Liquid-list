import React, {FC, useEffect, useMemo, useRef, useState} from "react";

// <Edit></Edit>
export type EditProps = {
    value?: any,
    placeHolder: string
    children?: ChildNode
    onUpdate?: (value:string) => void
}


export const Edit : FC<EditProps> = ({value = "", placeHolder,children, onUpdate}) => {
    const [edit, setEdit] = useState(value)
    const [editMode, setEditMode] = useState(false)
    const ref = useRef<HTMLDivElement>()
    const enabled = () => {
        // ref.current.contentEditable = 'true'
        // ref.current.focus()
        setEditMode(true)
    }

    const onFocus = () => {
        console.log("Focus")
    }

    const save = (e) => {
        ref.current.contentEditable = 'false'
        console.log("save")
        setEdit(e.target.textContent)
    }

    return (
        <div>
            {
                editMode ? (
                    <div>
                        <input type="text" placeholder={placeHolder} className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                ) : (
                    <div ref={ref} onDoubleClick={enabled} onFocus={onFocus} onBlur={save}>
                        {edit.length > 0 ? edit : (
                            <span className='text-base-300/20'>{placeHolder}</span>
                        )}
                    </div>
                )
            }
        </div>
    )
}
