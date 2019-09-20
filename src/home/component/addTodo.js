

import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {
    AddTodoWrapper, 
    Button
} from "../home_style";

class AddTodo extends React.Component{

    render(){
        return (
            <div className="container">
                <AddTodoWrapper>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                       
                        this.props.handleFormSubmit(event, this.refs.todoInput, this.refs.dueInput);
                    }}>
                        <div className="form-group row justify-content-lg-center">
                            <label htmlFor="dotoInput" className="col-lg-1 col-form-label" >Todo:</label>
                            <div className="col-lg-4">
                                <input required type="text" autoComplete="off" ref="todoInput" className="form-control" placeholder="new todo" id="dotoInput"  />
                            </div>
                        </div>
                        <div className="form-group row justify-content-lg-center">
                            <label htmlFor="dueInput" className="col-lg-1 col-form-label" >due:</label>
                            <div className="col-lg-4">
                                    <input required type="text" autoComplete="off" ref="dueInput" className="form-control"  id="dueInput" placeholder="e.g. 2018-08-18" />
                            </div>
                        </div>
                        <div className="form-group row justify-content-lg-center">
                            <div className="col-lg-6">
                                <Button type="submit">submit</Button>
                            </div> 
                        </div>
                    </form>
                </AddTodoWrapper>    

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit(event, todoInput, dueInput){
            
            dispatch(actionCreators.addTodo(todoInput.value, dueInput.value) );
            //clear input
            todoInput.value = "";
            dueInput.value = "";

        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);