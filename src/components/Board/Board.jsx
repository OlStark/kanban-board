import { LIST_TYPES, LIST_COPY} from '../config';
import List from '../List/List'
import style from './Board.module.css';
import uniqid from 'uniqid'


const Board = ({setTasks, tasks}) => {

    const addNewTask = (title, description) => {
        const task ={
            id: uniqid(),
            title,
            description,
            created: new Date().toISOString(),
            status: 'backlog',
        }

        setTasks([...tasks, task]);
    }


    return (
       <div className={style.board}>
        {
            Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type);
                const prevTaskList = tasks.filter(task => task.status === Object.values(LIST_TYPES)[(Object.values(LIST_TYPES).indexOf(type) - 1)])
                
                return(
                    <List
                    key={LIST_COPY[type]}
                    type={type}
                    title={LIST_COPY[type]}
                    tasks={listTasks || []}
                    addNewTask={addNewTask}
                    setTasks={setTasks}
                    prevTaskList={prevTaskList}
                    />
                )
            })
        }
       </div>
    );
    
}

export default Board;