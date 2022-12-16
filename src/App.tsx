import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDo} from "./components/ToDo";
import {NewStatus} from "./components/ToDo_Status";
import NewToDo from "./components/New_ToDo";
import AllToDos from "./components/All_ToDos";

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const getAllToDos = () => {
    axios.get("/api/todo")
        .then((response) => response.data)
        .then(setTodos)
  }

  const addTodo = (description: string) => {
    const newTodo = {
      description: description,
      status: "OPEN"
    }
    axios.post("/api/todo", newTodo)
        .then(getAllToDos)
  }

  const advanceTodo = (todo: ToDo) => {
    const updateTodo = {
      id: todo.id,
      description: todo.description,
      status: NewStatus(todo.status)
    }
    axios.put(`/api/todo/${todo.id}`, updateTodo)
        .then(getAllToDos)
  }

  const deleteTodo = (id: string) => {
    axios.delete(`/api/todo/${id}`)
        .then(getAllToDos)
  }

  return (
      <>
        <NewToDo newTodo={addTodo}/>
        <AllToDos todos={todos} advanceTodo={advanceTodo} deleteTodo={deleteTodo}/>
      </>
  );
}

export default App;
