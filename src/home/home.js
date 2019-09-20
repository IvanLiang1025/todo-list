

import React from "react";
import TodoList from "./component/list";
import AddTodo from "./component/addTodo";
import { connect } from "react-redux";
import {actionCreators} from "./store";
import Header from "./component/header";


class Home extends React.Component{

    componentWillMount(){
        this.props.loadTodos();
    }

    render(){
        return (
            <div>
                <Header></Header>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos(){
            dispatch(actionCreators.loadList());
        }
    }
}



export default connect(null, mapDispatchToProps)(Home);