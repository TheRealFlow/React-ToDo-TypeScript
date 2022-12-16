import {ToDo} from "./ToDo";
import ToDoCard from "./ToDo_Card";

type ToDoList = {
    title: string,
    todos: ToDo[],
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function ToDoList(props: ToDoList) {

    return (
        <section className={"Progress-Card"}>
            <p className={"Card-Title"}>{props.title}</p>
            <ul>{props.todos.map((currentTodo) =>
                <ToDoCard todo={currentTodo} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>)}
            </ul>
            </section>
    )
}