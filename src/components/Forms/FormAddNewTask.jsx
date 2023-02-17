import React from "react";
import { useState } from "react";
import  style  from './Forms.module.css'


const FormAddNewTask = ({formSubmit}) => {

    const [values, setValues] = useState({
        title: '',
        description: '',
    })

    const hendleChange = e => {
        const filedName = e.target.name
        setValues({...values, [filedName]: e.target.value})
    }

    const handleSubmit = e  => {
        e.preventDefault()
        if (values.title) {
            formSubmit(values.title, values.description)
        }
    }


    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input className={style.input} id='taskTitle' name='title' type='text' placeholder='Enter task title' onChange={hendleChange} value={values.title}/>
            <textarea className={style.textarea} id='taskDescription' name='description' placeholder='Enter task description' onChange={hendleChange} value={values.description}></textarea>
            <button className={style.submit} type='submit'>Add</button>
        </form>
    )
};

export default FormAddNewTask;