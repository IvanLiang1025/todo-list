
import * as actionType from "./actionType";
import axios from "axios";

export function loadList(){
    return (dispatch, getState) => {
        // console.log("hello");
        axios.get("http://localhost:8000/api/todos")
        // axios.get("/api/list.json")
          .then(result => {
            const todoList = result.data.todos;
            dispatch(loadTodo(todoList));
          })
    }
}

function loadTodo(todoList){
    return {
        type: actionType.LOAD_TODOS,
        todoList
    }
}

// add todo action creator
export function addTodo(todoText, due){
    return (dispatch) => {
        const todo = {
            todo: todoText,
            duedate: due,
            completed: false
        }
        axios.post("http://localhost:8000/api/todo", todo)
            .then(result => {
                
                dispatch(newTodo(result.data.todo));
            })
            .catch(err => {
                console.log(err);
            })
    }
    
}

function newTodo(todo){
    return {
        type: actionType.ADD_TODO,
        todo
    }
}

//toggle todo completed
export function toggleTodo(todo_id){
    return (dispatch, getState) => {
        const todoList = JSON.parse(JSON.stringify(getState().home.todoList));
        const foundTodo = todoList.filter((todo) => {
            return todo._id === todo_id;
        })
        
        const updatedTodo = {
            todo: foundTodo[0].todo,
            duedate: foundTodo[0].duedate,
            completed: !foundTodo[0].completed
        }

        axios.put(`http://localhost:8000/api/todo/${todo_id}`, updatedTodo)
            .then(result => {
                console.log("result");
                dispatch(toggleCompleted(todo_id));
            })
    }
}

function toggleCompleted(todo_id){
    return {
        type: actionType.TOGGLE_TOTO,
        todo_id
    }
}


//delete todo by id
export function deleteTodo(todo_id){
    return (dispatch) => {
        console.log("id: " + todo_id);
        axios.delete(`http://localhost:8000/api/todo/${todo_id}`)
            .then(result => {
                console.log("delete todo, id is: " + todo_id );
                dispatch(removeTodo(todo_id));
            })
    }
}

function removeTodo(todo_id){
    return {
        type: actionType.DELETE_TODO,
        todo_id
    }
}