import React, {FC, useEffect, useMemo, useRef, useState} from "react";

type Inputsize = 'xs' | 'sm' | 'md' | 'lg'
export type EditProps = {
    value?: any,
    placeHolder: string
    size?: Inputsize
    onUpdate?: (value:string) => void
}


export const EditText : FC<EditProps> = ({value = "", placeHolder, onUpdate, size = 'sm'}) => {
    const [edit, setEdit] = useState(value)
    const [editMode, setEditMode] = useState(false)
    const ref = useRef<HTMLDivElement>()
    const refInput = useRef<HTMLInputElement>()

    const enabled = () => {
        setEditMode(true)
    }

    useEffect(() => {
        if(editMode){
            refInput.current.focus()
        }
    }, [editMode])

    const onFocus = () => {
        console.log("Focus")
    }

    const save = () => {
        setEdit(refInput.current.value)
        setEditMode(false)
        if(onUpdate){
            onUpdate(refInput.current.value)
        }
    }

    const key = (e) => {
        if(e.code === "Enter" || e.key === "Enter"){
            save()
        }
    }

    return (
        <div>
            {
                editMode ? (
                    <div>
                        <input className={`input input-${size} input-ghost w-full max-w-xs`}
                            ref={refInput}
                               type="text"
                               placeholder={placeHolder}
                               defaultValue={edit}
                               onBlur={save}
                               onKeyUp={key}/>
                    </div>
                ) : (
                    <div ref={ref} onDoubleClick={enabled} onFocus={onFocus}>
                        {edit.length > 0 ? edit : (
                            <span className='text-base-300/20'>{placeHolder}</span>
                        )}
                    </div>
                )
            }
        </div>
    )
}
