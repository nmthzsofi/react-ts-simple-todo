import { useRef } from 'react';
import type { FormEvent } from 'react';


type NewTaskType = {
    isClosing: boolean;
    onAddTask: (task: string, detail: string) => void;
};

const NewTask = ({ isClosing, onAddTask }: NewTaskType) => {
    const task = useRef<HTMLInputElement>(null);
    const details = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        const enteredTask = task.current!.value;
        const enteredDetailes = details.current!.value;

        onAddTask(enteredTask, enteredDetailes);

        event.currentTarget.reset();

    }

    return (

        <form autoComplete="off" className={`popup ${isClosing ? 'exit' : ''}`} onSubmit={handleSubmit} >
            <h1>Add a new task</h1>
            <label htmlFor="task" >Your task: </label>
            <input type="text" id="task" ref={task} required />
            <label htmlFor="details">Your task details: </label>
            <input type="text" id="details" ref={details} />
            <button className="popup-btn" >Add Task</button>
        </form>
    )
}

export default NewTask;