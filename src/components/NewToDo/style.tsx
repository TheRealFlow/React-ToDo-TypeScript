import styled from "styled-components";

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
`

export default AddToDo;