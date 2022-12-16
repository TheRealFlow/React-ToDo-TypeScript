import {ToDo} from "./ToDo";

type ToDoCard = {
    todo: ToDo,
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function ToDoCard(props: ToDoCard) {

    return (
        <li className={"ToDoCard"}>
            <p className={"Card-Text"}>{props.todo.description}</p>
            {props.todo.status !== "DONE" && <button className={"Advance-Btn"} onClick={() => props.advanceTodo(props.todo)}>Advance</button>}
            {props.todo.status === "DONE" && <button className={"Delete-Btn"} onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>}
        </li>
    )
}