import { useState } from "react";
import { Link } from "react-router-dom";
import { LIST_TYPES } from "../config";
import FormAddNewTask from "../Forms/FormAddNewTask";
import style from './List.module.css'
import Add_image from '../../images/Add_task.svg'



const List = ({type, title, tasks, addNewTask, setTasks, prevTaskList}) => {

    const [formVisible, setFormVisible] = useState(false);

    const toggleForm = () => {
        setFormVisible(!formVisible)
    }

    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
    }

    const changeStatus = (e, status) => {
        const tasksList = JSON.parse(window.localStorage.getItem('tasks'));
        const tasksCopy = tasksList.map((t) => {
            if (t.id === e.target.value) {t.status = status}
            return t
        });
        setTasks(tasksCopy);
        setFormVisible(!formVisible);
        
    }

    return (

        <div className={style.list}>

            <h2 className={style.list_title}>{title}</h2>
            {tasks.length? 
				tasks.map(task =>
					<Link key={task.id} to={`/tasks/${task.id}`}>
						<div className={style.task}>{task.title}</div>
					</Link>
					
                ) : 
                    <p>No tasks added yet</p>
			}

            {type === LIST_TYPES.BACKLOG && <button onClick={toggleForm} className={style.add_button}><img src={Add_image}/> Add card</button>}
            {type === LIST_TYPES.BACKLOG && formVisible && (
                <FormAddNewTask
                    formSubmit={formSubmit}/>
            )}
            {type !== LIST_TYPES.BACKLOG && <form onSubmit={(e) => {e.preventDefault(); setFormVisible(false);}} className={style.option_form}>
                <select className={style.select}
                    onChange={(e) => changeStatus(e, type)}
                    defaultValue={"default"}
                    disabled={Boolean(prevTaskList.length < 1)}>

                        <option
                            className={style.option}
                            value={'default'}
                            >Add card
                        </option>
                        {prevTaskList.map(task => {
                            return(
                                <option className={style.option} key={task.id} value={task.id}>
                                    {task.title}
                                </option>
                            )
                        })}
                    </select>
                </form>
            }

        </div>

    )
};

export default List;