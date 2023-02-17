import style from './Footer.css';

const Footer = ({tasks}) => {

    return (
        <footer className={style.footer}>
            <div className={style.task_statistic}>
                <p>Active tasks:{tasks.filter(task => task.status === 'backlog').length}</p>
                <p>Finish tasks:{tasks.filter(task => task.status === 'done').length}</p>
            </div>
            <p className={style.contacts}>Kanban board by <a className={style.github} href='https://github.com/starkov-sys'>Oleg Starkov</a>, 2023</p>
        </footer>
    );
}

export default Footer;