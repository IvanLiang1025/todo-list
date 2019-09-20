
import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {
    // ListWrapper,
    List,
    ListItem,
    ListButton
} from "../home_style";

class TodoList extends React.Component{
    
    render(){
        console.log(this.props.todoList);
        return (

            <div className="container">
                <div className="row">
                    <List className="col-lg-6">
                        <h1 className="title">Todo</h1>
                        {   
                            this.props.todoList.map((todo) => {
                                // console.log(this.props.todoList.length);
                                if(!todo.completed){
                                    return (
                                        <ListItem key={todo._id}> 
                                            <p className="todo-content">
                                                <input type="checkbox" readOnly checked={todo.completed} onClick={() => {this.props.toggleTodo(todo._id)}}/> 
                                                {todo.todo}
                                                <ListButton onClick = {() => {this.props.handleDeleteTodo(todo._id)}}>delete</ListButton>
                                            </p>
                                            <p className="todo-duedate">Due Date: {todo.duedate}</p>
                                        </ListItem>
                                    )
                                }else{
                                    return null;
                                }
                                    
                            })
                        }
                    </List>
                    <List className="col-lg-6">
                    <h1 className="title">Completed</h1>
                    {
                        this.props.todoList.map((todo) => {
                            if(todo.completed){
                                return (
                                    <ListItem key={todo._id}>
                                        <p className="todo-content"> 
                                            <input type="checkbox" readOnly checked={todo.completed} onClick={() => {this.props.toggleTodo(todo._id)}}/> 
                                            {todo.todo}
                                            <ListButton onClick = {() => {this.props.handleDeleteTodo(todo._id)}}>delete</ListButton>
                                        </p>
                                        <p className="todo-duedate">Due Date: {todo.duedate}</p>
                                    </ListItem>
                                )
                            }else{
                                return null;
                            }
                                
                        })
                    }
                    </List>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        todoList: state.home.todoList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo(todo_id){
            dispatch(actionCreators.toggleTodo(todo_id));
        },
        handleDeleteTodo(todo_id){
            console.log(todo_id);
            dispatch(actionCreators.deleteTodo(todo_id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);