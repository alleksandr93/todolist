import React from 'react';
import { FilerValuesType } from './App';

// Типизация 
type PropsType = {
    removeTask: (id: number) => void
    changeFilter: (value: FilerValuesType) => void
    title: string
    tasks: Array<TaskType>
    // tasks:TaskType[]
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
// Компонента
export const Todolist = (props: PropsType) => {
    const onClickButtonsHandler = (title: FilerValuesType) => {
        props.changeFilter(title)
    }

    //Зарефакторили код и создали map
    const mapping = props.tasks.map(el => {
        // Создаю кнопку в mape
        const onClickHandler = () => {
            props.removeTask(el.id)
        }
        return <li key={el.id}>
            <input type="checkbox" checked={el.isDone} />
            <span>{el.title}</span>
            <button onClick={onClickHandler} className='btn'>+</button>
        </li>
    })

    return (
        <div className='todolist'>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>{mapping}</ul>
            <div>
                <button onClick={()=>onClickButtonsHandler("All")}>All</button>
                <button onClick={()=>onClickButtonsHandler("Active")}>Active</button>
                <button onClick={()=>onClickButtonsHandler("Completed")}>Completed</button>
            </div>
        </div>
    )
}