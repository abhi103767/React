import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Input from './components/Input';
import { useEffect, useState } from 'react';
import Timer from './components/Timer';



function App() {
  
  const [todo,setTodo] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
    .then((res) => res.json())
    .then((data) => setTodo(data))
  },[isClicked])

  console.log(todo);

  function changeStateOfIsClicked() {
    setIsClicked(!isClicked);
  }


  return (
    <div className="App">
   <Input   handleClick = { () => {
         changeStateOfIsClicked()
       }} />

   {
     todo.map((item) => {
       return <List title = {item.body.title} task = {item.body.task}
     id = {item.id} handleClick = { () => {
      changeStateOfIsClicked()
    }} />
     })
   }
   <Timer />
    </div>
  );
}

export default App;
