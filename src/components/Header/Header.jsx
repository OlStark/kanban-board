import Login from "../Login/Login";
import  './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header_title'>Awesome Kanban Board</h1>
            <Login/>
        </header>
    );
}

export default Header;