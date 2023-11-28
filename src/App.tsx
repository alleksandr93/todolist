import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Toldolist';


// Типизируем чтобы не ошибиться в строках
export type FilerValuesType = 'All' | 'Completed' | 'Active'

function App() {

    // Данные храняться в хуке useState
    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
    ])
    // Создаем локальный стайт чтобы фильровать кнопочки
    let [filter, setFilter] = useState<FilerValuesType>('All')
    // Функции:
    // Удалем Таску из массива
    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }
    // Фильтруем кнопочки
    // Создаем функицию
    const changeFilter = (value: FilerValuesType) => {
        
        setFilter(value)
        debugger
    }
    let tasksForTodolist = tasks
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(el => el.isDone === true)
    } else if (filter === 'Active') {
        tasksForTodolist = tasks.filter(el => el.isDone === false)
    }
    return (
        <div className="app">
            <Todolist
                changeFilter={changeFilter}
                removeTask={removeTask}
                tasks={tasksForTodolist}
                title='What to learn?'
            />
        </div>
    );
}
export default App;
