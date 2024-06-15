import './App.css';
import { useState } from 'react';

function App() {

  const[input, setInput] = useState("");
  const[list, setList] = useState([]);

  const handleInput=(e)=>{
    setInput(e.target.value)
  }

  const handleTask=()=>{
    setList([...list, input])
    setInput("")
  }

  const handleDelete=(i)=>{
  const filterList = list.filter((elm)=> elm!=list[i])
  console.log("filterList",filterList);
  setList(filterList)
  }

  return (
    <div className="App">
      <h2>Todo App
      </h2>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e)=>handleInput(e)}/><button onClick={handleTask}>Add Task</button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i)=> <li key={i} onClick={()=>handleDelete(i)} >{item}</li>)}
          </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
