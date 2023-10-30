import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Toldolist';

function App() {
    let tasks1: Array<TaskType> = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 2, title: 'React', isDone: false },
    ]
    let tasks2: Array<TaskType> = [
        { id: 1, title: 'Terminator', isDone: true },
        { id: 2, title: 'XXX', isDone: false },
        { id: 2, title: 'Jentlents of fortune', isDone: true },
    ]
    return (
        <div className="app">
            <Todolist tasks={tasks1} title='What to learn?' />
            <Todolist tasks={tasks2} title='Movies' />

        </div>
    );
}


export default App;
