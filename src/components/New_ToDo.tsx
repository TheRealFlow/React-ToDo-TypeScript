import {ChangeEvent, useState} from "react";

type NewToDo = {
    newTodo: (description: string) => void
}

export default function NewToDo(props: NewToDo) {
    const [description, setDescription] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    return (
        <section className={"Add-ToDo"}>
            <input onChange={onDescriptionChange} value={description} placeholder={"Write a new ToDo..."}/>
            <button className={"Add-Btn"} onClick={() => props.newTodo(description)}>Add A ToDo</button>
        </section>
    )
}