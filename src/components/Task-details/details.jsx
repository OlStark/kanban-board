import { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Task-details.module.css'
import { ReactComponent as Close_Details } from '../../images/Close_details.svg'
import { LIST_COPY, LIST_TYPES } from '../config';

const TaskDetails = ({tasks, setTasks}) => {
    
    const handlChange = (e) => {
        const newStatus = e.tarhet.value
        
        const updateTasks = tasks.map(task => {
            if (task.id === taskID) {
                return {...task, status: newStatus}
                
            }
                return task
        })

        setTasks(updateTasks)
    }

    const { taskID } = useParams();
    const task = JSON.parse(window.localStorage.getItem('tasks')).find(task => task.id === taskID);

    const [description, setDescription] = useState(task.description ? task.description: 'This task has no description');

    const addDescription = () => {
        const taskCopy = tasks.map(el => {
            if (el.id === task.id) {
                el.description = description
            }
            return el
        })
        setTasks(taskCopy)
        
    }

    return ( 
        <div className={style.details_wrapper}>

            {task ? (
                <>
                    <div className={style.details_header}>

                        <h2 className={style.details_title}>{task.title}</h2>
                        
                        <Link to='/'>

                            <Close_Details className={style.close_btn}/>
                            
                        </Link>
                        
                    </div>

                    <textarea
                        className={style.task_description}
                        value={task.description}
                        onChange={(e) => {setDescription(e.target.value)}}
                        onFocus={() => {description === 'This task has no description' && setDescription('')}}
                        onBlur={addDescription}/>
                        <select className={style.select} onChange={handlChange} value={task.status}>
                            {Object.values(LIST_TYPES).map(list => {
                                return <option key={list} value={list}>{LIST_COPY[list]}</option>
                            })}
                        </select>
                </>
                
                    ) : (<div className={style.details_not_found}>
                            <h2 className={style.details_title}>task with ID {taskID} not found</h2>
                            <Link to='/'>

                            <Close_Details className={style.close_btn}/>
                            
                        </Link>
                        </div>
                        )}

        </div>
     );
}

export default TaskDetails ;