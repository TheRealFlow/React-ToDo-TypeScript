import {ToDo} from "../ToDo";
import ToDoCard from "../ToDoCard";
import StatusCard from "./style";

type ToDoList = {
    title: string,
    todos: ToDo[],
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function ToDoList(props: ToDoList) {

    return (
        <StatusCard>
            <h2>{props.title}</h2>
            <ul>{props.todos.map((currentTodo) =>
                <ToDoCard todo={currentTodo} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>)}
            </ul>
        </StatusCard>
    )
}