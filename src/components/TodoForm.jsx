import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [ value, setValue ] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo({
            text: value,
            isComplete: false,
        });
        setValue('');
    };

    return(
        <form action="" onSubmit={handelSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a new todo" />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;