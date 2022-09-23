import {connect} from 'react-redux'
import { useRef } from 'react'
import List from './List'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from '../Actions/todos'

const Todos = (props) => {
    const inputRef = useRef();

    const addItem = (e) => {
        e.preventDefault();

        props.dispatch(handleAddTodo(inputRef.current.value, () => inputRef.current.value = ""))
    }

    const removeItem = (todo) => {
        props.dispatch(handleDeleteTodo(todo));
    }

    const toggleItem = (id) => {
        props.dispatch(handleToggle(id))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Enter your todo" ref={inputRef} />
            <button onClick={addItem}> ADD TODO</button>
            <List items={props.todos} toggle={toggleItem} remove={removeItem} />
        </div>
    )
}

export default connect((state) => ({
    todos:state.todos
}))(Todos);