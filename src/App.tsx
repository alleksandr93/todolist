import React from 'react';
import './App.css';
import { TaskType, Todolist } from './Toldolist';

function App() {
    let tasks1: Array<TaskType> = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ]
    
    let tasks2: Array<TaskType> = [
        { id: 1, title: 'Hello world', isDone: true },
        { id: 2, title: 'I am Happy', isDone: false },
        { id: 3, title: 'Yo', isDone: true },
    ]
    return (
        <div className="app">
            <Todolist tasks={tasks1} title='What to learn?' />
            <Todolist tasks={tasks2} title='Songs' />

        </div>
    );
}


export default App;
