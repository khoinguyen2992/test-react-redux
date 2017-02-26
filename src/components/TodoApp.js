import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSave(e) {
        const text = e.target.value.trim();
        console.log(text);
        if (e.which === 13 && text.length !== 0) {
            this.props.actions.addTodo(text)
            this.setState(prevState => ({
                text: ''
            }));
        }
    }

    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.handleChange}
                    onKeyDown={this.handleSave}
                    value={this.state.text}/>
                <div>
                    {this.props.todos.map(todo =>
                        <div key={todo.id}>{todo.text}</div>
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todosReducers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);