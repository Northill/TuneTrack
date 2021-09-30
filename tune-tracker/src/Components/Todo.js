

import {TaskButton} from "./TaskButton"

const ToDo = (props) => {

    let isTaskButton = () => {
        if (props.task) {
            return <TaskButton />
        }
        return <h1>Add</h1>
    }

    return (
        <>
            <div className='ToDo'>
                <ul id='taskList'>
                    <li class='taskLi' id='item1'> 
                        <h3>{props.name}</h3>
                    </li>
                    <li class='taskLi' id='item2'>
                        <TaskButton />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ToDo;