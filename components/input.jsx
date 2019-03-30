import React, { Component } from 'react';
import TaskList from './taskList';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: '',
            taskList: []
        }
    }

    handleChange(taskText) {
        this.setState({ taskText: taskText.target.value })
    }

    addTask = () => {
        if (this.state.taskText === '') {
            return
        }

        let tasksArr = this.state.taskList;
        tasksArr.push(this.state.taskText);
        this.setState({ taskList: tasksArr });
        this.taskTextInput.focus();
        this.taskTextInput.value = '';
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {

        }
    }

    deleteTask(index) {
        let taskArr = this.state.taskList;
        taskArr.splice(index, 1);
        this.setState({ taskList: taskArr });
    }

    render() {
        if (this.state.taskList === '') { return }

        let taskList = this.state.taskList.map((val, key) => {
            return <TaskList key={key} text={val} deleteMethod={() => this.deleteTask(key)} />
        });



        return (
            <div className="container" >
                <div className="list" >
                    {taskList}

                </div>

                <input type="text" name="input" id="input" className="form-control text-center" onChange={taskText => this.handleChange(taskText)}
                    ref={(ref) => this.taskTextInput = ref} value={this.state.tasktext} placeholder="Enter your tasks here"
                    onKeyPress={this.handleKeyPress.bind(this)} />
                <div className="btn-block">
                    <button type="submit" className="btn btn-primary btn-md mt-1 " onClick={this.addTask} >
                        <i className="fas fa-plus fa-md"></i>
                    </button>
                </div>

                <style jsx>{`
                        .btn-block {
                            position: relative;
                        }
                        input {
                            background-color: skyblue;
                            position: relative;
                            
                        }
                        button {
                            border-radius: 50%;
                            position: sticky;
                        }
                        button:hover {
                            box-shadow: 1px 1px 1px 1px skyblue;
                        }
                    `}</style>

            </div>
        )
    }
}
