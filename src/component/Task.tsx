import type { PropsWithChildren } from "react";

//interface TaskType { title: string; children: ReactNode; };

type TaskType = PropsWithChildren<{ 
    id: number, 
    title: string; 
    description: string; 
    onDelete: (id: number) => void; 
    done: boolean;
    handleToggleDone: (id: number) => void;
    }>

const Task = ({ id, title, description, onDelete,done, handleToggleDone }: TaskType) => {
    return (
        <article className="task">
            <p className="task-first-line">
                <p className="task-title">
                    <input onChange={() => handleToggleDone(id)} checked={done} type="checkbox" key={id} id={`task-${id}`}/>
                    <label htmlFor={`task-${id}`}>{title}</label>
                </p>
                <button className="delete-btn" onClick={() => onDelete(id)}></button>
            </p>
            <p className="task-description" >{description}</p>
        </article>
    );
}

export default Task;