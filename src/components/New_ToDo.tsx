import styled from "styled-components";
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
        <AddToDo>
            <h1>Awesome <span>ToDo</span> App</h1>
            <input onChange={onDescriptionChange} value={description} placeholder={"Write a new ToDo..."}/>
            <button onClick={() => props.newTodo(description)}>Add A ToDo</button>
        </AddToDo>
    )
}

const AddToDo = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 1rem;
    font-family: "American Typewriter";
    font-size: 3.5rem;
    text-align: center;
  }
  span {
    color: green;
  }
  input {
    margin-bottom: .5rem;
    padding: 1rem 5rem;
    border: none;
    border-radius: 10px;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  button {
    padding: 1rem 5rem;
    border: none;
    border-radius: 10px;
    background-color: green;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`