import styled, {css} from "styled-components";
import {ToDo} from "./ToDo";

type ToDoCard = {
    todo: ToDo,
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function ToDoCard(props: ToDoCard) {

    return (
        <Card>
            <p>{props.todo.description}</p>
            {props.todo.status !== "DONE" && <button className={"Advance-Btn"} onClick={() => props.advanceTodo(props.todo)}>Advance</button>}
            {props.todo.status === "DONE" && <button className={"Delete-Btn"} onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>}
        </Card>
    )
}

const Card = styled.li`
  margin: 1rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p {
    margin: 1rem;
    font-size: 1.5rem;
    list-style: none;
    font-family: "Apple SD Gothic Neo";
  }
`