
import React from "react";
import { useState } from "react";

const AddTask = ({OnAdd}) => {

    const [text,setText] = useState('')
    const [day, SetDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const OnSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please add a task")
            return
        }

        OnAdd({text,day,reminder});
        setText('');
        SetDay('');
        setReminder(false);
    }

    return(
        <form className="add-form">
        <div className="form-control">
            <label>Add Task</label>
            <input type="text" placeholder="Task Name" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day</label>
            <input type="text" placeholder="Add Day and Time" value={day} onChange={(e)=>SetDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
        <label>SET Reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
        </div>
        <input type="submit" value='Add Task' className="btn btn-block" onClick={OnSubmit}/>
        </form>
    )
}

export default AddTask; 