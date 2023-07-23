import { useState } from "react";

const TaskForm = (defaultText, defaulTime, defaultReminder, submitFunction) => {

    
    let [text, setText] = useState(defaultText);
    let [time, setTime] = useState(defaulTime);
    let [reminder, setReminder] = useState(defaultReminder)
    let [noTextWarning, setNoTextWarning] = useState("")


    const onSubmit = (event) => {
        event.preventDefault();
        if (!text) return setNoTextWarning("Please input a task!");

        let newTask = { text, time, reminder }
        submitFunction(newTask);

        // Reset form after submit 
        setText("");
        setTime("");
        setReminder(false);
        setNoTextWarning("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Task</label>
                    <input
                        type="text"
                        value={text}
                        placeholder="Add a Task"
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div>
                    <label>Time</label>
                    <input
                        type="text"
                        value={time}
                        placeholder="Add a Time"
                        onChange={(event) => setTime(event.target.value)}
                    />
                </div>
                <div>
                    <label>Reminder</label>
                    <input
                        type="checkbox"
                        placeholder="Reminder?"
                        checked={reminder}
                        onChange={(event) => setReminder(event.target.checked)
                        }
                    />
                </div>
                <input
                    type="submit"
                    value="Save Task"
                />
                <h3>{noTextWarning}</h3>

            </form>
        </div>
    )
}



export default TaskForm