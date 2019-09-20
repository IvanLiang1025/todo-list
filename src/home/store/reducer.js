
import * as actionType from "./actionType";

const initialState = {
    todoList:[],
}
export default (state = initialState, action) => {
    const tempState = JSON.parse(JSON.stringify(state));
    const todoList = tempState.todoList;
    switch(action.type){
        case actionType.ADD_TODO: 
            tempState.todoList.push(action.todo);
            return tempState;
        
        case actionType.LOAD_TODOS:
            tempState.todoList = action.todoList;
            return tempState;
        
        case actionType.TOGGLE_TOTO:
            for (let i = 0; i < todoList.length; i++){
                if(todoList[i]._id === action.todo_id){
                    todoList[i].completed = !todoList[i].completed;
                }
            }
            tempState.todoList = todoList;
            return tempState;

        case actionType.DELETE_TODO:
         
            let index = todoList.findIndex((todo) => {
                return todo._id === action.todo_id;
            });
            todoList.splice(index,1);
            tempState.todoList = todoList;
        
            return tempState;

        default: 
            return state;
    }
}