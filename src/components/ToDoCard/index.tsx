import {ToDo} from "../ToDo";
import Card from "./style";
import Button from "../StyledButtons";

type ToDoCard = {
    todo: ToDo,
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function ToDoCard(props: ToDoCard) {

    return (
        <Card>
            <p>{props.todo.description}</p>
            {props.todo.status !== "DONE" && <Button className={"advance"} onClick={() => props.advanceTodo(props.todo)}>Advance</Button>}
            {props.todo.status === "DONE" && <Button className={"delete"} onClick={() => props.deleteTodo(props.todo.id)}>Delete</Button>}
        </Card>
    )
}
