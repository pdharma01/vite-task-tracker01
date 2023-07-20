import { useState } from "react"

const AddTask = ({ addTask }) => {

    let [text, setText] = useState("");
    let [time, setTime] = useState("");
    let [reminder, setReminder] = useState(false)
    let [noTextWarning, setNoTextWarning] = useState("")


    const onSubmit = (event) => {
        event.preventDefault();
        if (!text) return setNoTextWarning("Please input a task!");



        addTask(text, time, reminder);
        // text ? console.log(text) : console.log("NO");

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
                    <input type="text"
                        value={text}
                        placeholder="Add a Task"
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div>
                    <label>Time</label>
                    <input type="text"
                        value={time}
                        placeholder="Add a Time"
                        onChange={(event) => setTime(event.target.value)}
                    />
                </div>
                <div>
                    <label>Reminder</label>
                    <input type="checkbox"
                        // value={time}
                        placeholder="Reminder?"
                        checked={reminder}
                        onChange={(event) => setReminder(event.target.checked)
                        }
                    />
                </div>
                <input type="submit" value="Save Task" />
                <h3>{noTextWarning}</h3>

            </form>
        </div>
    )
}

export default AddTask