import { useState } from 'react';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import style from './index.css'

function App() {

  const initialStste = JSON.parse(window.localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialStste);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  
  return (
    <div className={style.App}>
      <Header/>
      <Main className={style.Main} tasks={tasks} setTasks={setTasks}/>
      <Footer tasks={tasks}/>
    </div>
    
  );
}

export default App;
