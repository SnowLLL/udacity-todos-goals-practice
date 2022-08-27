import {connect} from 'react-redux'
import { useRef } from 'react'
import List from './List'

import {
    handleAddGoal,
    handleDeleGoal
} from '../Actions/goals'

const Goals = (props) => {
    const inputRef = useRef();

    const addItem = (e) => {
        e.preventDefault();

        props.dispatch(handleAddGoal(inputRef.current.value, () => inputRef.current.value = ""))
    }

    const removeItem = (goal) => {
        props.dispatch(handleDeleGoal(goal));
    }

    return (
        <div>
            <h1>Goals List</h1>
            <input type="text" placeholder="Enter your goal" ref={inputRef} />
            <button onClick={addItem}> ADD GOAL</button>
            <List remove={removeItem} />
        </div>
    )
}

export default connect((state) => ({
    goals: state.goals
}))(Goals);