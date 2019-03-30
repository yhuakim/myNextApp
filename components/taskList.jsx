import React, { Component } from 'react';



export default class TaskList extends Component {

    render() {
        return (
            <div className="container" >
                <ul className="list-unstyled">
                    <li className="form-control mt-2 text-center text-success " >
                        <input type="checkbox" name="task" id="index" className="mr-2" />
                        {this.props.text}
                        <i className="fas fa-times text-danger ml-2 text-right" onClick={this.props.deleteMethod} ></i>
                    </li>
                </ul>
            </div>
        )
    }
}
