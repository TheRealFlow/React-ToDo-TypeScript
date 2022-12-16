import {ToDo} from "./ToDo";
import ToDoCard from "./ToDo_Card";
import styled from "styled-components";

type ToDoList = {
    title: string,
    todos: ToDo[],
    advanceTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function ToDoList(props: ToDoList) {

    return (
        <ProgressCard>
            <h2>{props.title}</h2>
            <ul>{props.todos.map((currentTodo) =>
                <ToDoCard todo={currentTodo} advanceTodo={props.advanceTodo} deleteTodo={props.deleteTodo}/>)}
            </ul>
        </ProgressCard>
    )
}

const ProgressCard = styled.section`
  margin: 2rem 1rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h2 {
    font-size: 2rem;
    text-decoration: underline;
    font-family: "American Typewriter";
  }
`