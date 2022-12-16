import styled, {css} from 'styled-components';

const Button = styled.button`
  padding: 1rem 5rem;
  border: none;
  border-radius: 10px;
  background-color: green;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &.advance {
    margin: 1rem;
    padding: 1rem 5rem;
    border: none;
    background-color: darkorange;
    border-radius: 10px;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;);
  }
  &.delete {
    margin: 1rem;
    padding: 1rem 5rem;
    border: none;
    background-color: crimson;
    border-radius: 10px;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
export default Button;
