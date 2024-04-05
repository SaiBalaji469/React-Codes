import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

export default function Todo(){
    let [Todos, setTodos] = useState([{task: "Sample Task", id :uuidv4(), isDone:false}]);
    let[newTodo, setNewTodo] = useState("");

    function addTodo(){
        setTodos((preNodes) =>{
            return [...Todos, {task: newTodo, id: uuidv4(),isDone:false}];
    });
    setNewTodo("");
};

    function updater(event){
       setNewTodo(event.target.value);
    }

    function deleteTodo(id){
        setTodos((prevTodos) => Todos.filter((prevTodos)=>prevTodos.id != id));
    }

    function toUpper(){
        let newOne = Todos.map((todo) =>{
            return {
                ...todo,
                task: todo.task.toUpperCase(),
                
            }
        });
        setTodos(newOne);
    }

    function UpperOne(id){
        let newOne = Todos.map((todo) =>{
            if (id === todo.id){  
                return {
                ...todo,
                task: todo.task.toUpperCase(),
            }}else{
                return todo;
            }
              
        });
        setTodos(newOne);
       
    }

    function done(id){
        let newTwo = Todos.map((todo) =>{
            if (id === todo.id){  
                return {
                ...todo,
                isDone: todo.isDone = true,
            }}else{
                return todo;
            }
              
        });
        setTodos(newTwo);
        console.log("Done")

    }

    return(
        <>
            <h3 className="Title">Todo App</h3>
            <div className="container">
            <input type="text" 
            value={newTodo} 
            placeholder="add a note" 
            onChange={updater}/>
        <button onClick={addTodo} className="add">add</button>
            <ul>{
                    Todos.map((todo) =>(
                        <li key={todo.id}>
                           
                            <div className="todos" style={{textDecoration : todo.isDone ? "line-through" : "null"}}>{todo.task}</div>
                        <div className="btn-container">
                                <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
                                <button onClick={() =>UpperOne(todo.id)}>UpperOne</button>
                                <button onClick={() =>done(todo.id)}>Done</button>
                            </div>
                            
                        </li>
                    ))}
            </ul>
            <button onClick={toUpper}>UpperCaseAll</button>
</div>
        </>
    )
}