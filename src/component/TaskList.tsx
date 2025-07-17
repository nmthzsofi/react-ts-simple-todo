import Task from "../component/Task";
import type { TaskType } from "../App";

type TaskListType = {
    tasks: TaskType[];
    onDeleteTask: (id: number) => void;
    handleToggleDone: (id: number) => void;
};

const TaskList = ({ tasks, onDeleteTask, handleToggleDone }: TaskListType) => {
    return (
        <div>
            {tasks.map((task) => (
                <div>
                    <Task done={task.done} id={task.id} title={task.title} description= {task.descrition} onDelete={onDeleteTask} handleToggleDone={handleToggleDone}>
                    </Task>
                </div>
            ))}
        </div>
    )

}

export default TaskList;