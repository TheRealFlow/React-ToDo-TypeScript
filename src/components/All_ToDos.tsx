import {ToDo} from "./ToDo";
import ToDoList from "./ToDo_List";

type AllToDos = {
    todos: ToDo[],
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function AllToDos(props: AllToDos) {
    const openTodos: ToDo[] = props.todos.filter((currentTodo) => currentTodo.status === "OPEN")
    const inProgressTodos: ToDo[] = props.todos.filter((currentTodo) => currentTodo.status === "IN_PROGRESS")
    const doneTodos: ToDo[] = props.todos.filter((currentTodo) => currentTodo.status === "DONE")

    return (
        <section className={"ToDo-List"}>
            <ToDoList title="OPEN" todos={openTodos} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>
            <ToDoList title={"IN PROGRESS"} todos={inProgressTodos} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>
            <ToDoList title={"DONE"} todos={doneTodos} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>
        </section>
    )
}