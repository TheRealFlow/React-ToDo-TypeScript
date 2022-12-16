import {ChangeEvent, useState} from "react";
import AddToDo from "./style";
import Button from "../StyledButtons";

type NewToDo = {
    newTodo: (description: string) => void
}

export default function NewToDo(props: NewToDo) {
    const [description, setDescription] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    return (
        <AddToDo>
            <h1>Awesome <span>ToDo</span> App</h1>
            <input onChange={onDescriptionChange} value={description} placeholder={"Write a new ToDo..."}/>
            <Button onClick={() => props.newTodo(description)}>Add A ToDo</Button>
        </AddToDo>
    )
}