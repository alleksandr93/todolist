import React from 'react';
import { FilterValuesType } from './App';


type PropsTodoLIst = {
    title: string
    task:PropsTask[]
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}
export type PropsTask = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsTodoLIst) => {

    const onClickHandler = (value: FilterValuesType) => {
        props.changeFilter(value)

    }
    //Рефакторим мап код вынося его
    const mapping = props.task.map(el => {
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone} />
                <span>{el.title}</span>
                <button onClick={() => props.removeTask(el.id)}>x</button>
            </li>)
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>{mapping}</ul>
            <div>
                <button onClick={() => onClickHandler('All')}>All</button>
                <button onClick={() => onClickHandler('Active')}>Active</button>
                <button onClick={() => onClickHandler('Completed')}>Completed</button>
            </div>
        </div>
    );
};
