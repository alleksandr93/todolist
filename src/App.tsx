import React, { useState } from 'react';
import './App.css';
import { PropsTask, Todolist } from "./Todolist";

export type FilterValuesType = "All" | "Active" | "Completed"
function App() {

    let title = 'Что выполняем?'
    let title2 = 'Песенки'
    let [task, setTask] = useState<PropsTask[]>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJs', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ])
    let [filter, setFilter] = useState<FilterValuesType>('All')
    let tasksForTodolist = task
    const removeTask = (id: number) => {
        setTask(task.filter(el => el.id !== id))
    }
    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }
    if (filter === 'Active') {
        tasksForTodolist = task.filter(el => !el.isDone)
    } else if (filter === 'Completed'){
        tasksForTodolist = task.filter(el => el.isDone)
    }

    return (
        <div className="App">

            <Todolist changeFilter={changeFilter} title={title} task={tasksForTodolist} removeTask={removeTask} />

        </div>
    )
}

export default App;
