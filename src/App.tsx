import TaskList from "./component/TaskList";
import Header from "./component/Header";
import HeaderImage from "./assets/sun.png";
import { useState } from 'react';
import NewTask from "./component/NewTask";
import InfoBox from "./component/InfoBox";

export type TaskType = {
  id: number;
  title: string;
  descrition: string;
  done: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    if (open) {
      setIsClosing(true);
      setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setOpen(true);
    }
  };

  const handleToggleDone = (id: number) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    )
  );
};

  const handleAddTask = (task: string, details: string) => {
    setTasks(prevTasks => {

      const newTask: TaskType = {
        id: Math.random(),
        title: task,
        descrition: details,
        done: false
      };
      setOpen(false);
      return [...prevTasks, newTask];
    });
  }

  const handleDeleteTask = (id: number) => {
    setTasks(prevTask => prevTask.filter(task => task.id !== id));
  }


  return (
    <main>
      <Header image={{ src: HeaderImage, alt: "Sun image" }}>
        <button
          className="toggle-btn"
          onClick={handleToggle}>
          <span className={open ? "rotated" : ""}>+</span>
          <p className="toggle-btn-text"> {!open ? ("Add") : ("Cancel")}</p>
        </button>
      </Header>

      {tasks.length === 0 ? (
        <InfoBox mode="hint"/>
      ) : tasks.length >= 4 ? (
        <InfoBox mode="warning"/>
      ) : (
        <InfoBox mode="none"/>
      )}
      {open && <NewTask isClosing={isClosing} onAddTask={handleAddTask} />}
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} handleToggleDone={handleToggleDone}/>

    </main>
  );
}

export default App;
