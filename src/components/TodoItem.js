import React from "react"

import { FaTrash } from "react-icons/fa"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    
    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState({
            editing: true,
        })
    }

    handleUpdateDone = event => {
        if (event.key === "Enter") {
            this.setState({editing: false})
        }
    }

    render () {
        let viewMode = {}
        let editMode = {}

        if (this.state.editing){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox" 
                        className={styles.checkbox}
                        checked={this.props.todo.completed}
                        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                    /> 
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                        <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                    </button>
                    <span style={this.props.todo.completed ? this.completedStyle: null}>
                        {this.props.todo.title}
                    </span>
                </div>
                <input 
                    type="text" 
                    style={editMode} 
                    className={styles.textInput}
                    onChange={e => {
                        this.props.setUpdate(e.target.value, this.props.todo.id)
                    }}
                    onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}

export default TodoItem