import React from "react";

const Form = (props) => {
    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
                type='text'
                placeholder='Enter name here'
                value={props.values.name}
                name='name'
                onChange={handleChange}
            />
            </label>
            <label>Email
            <input
                type='email'
                placeholder='Enter email here'
                value={props.values.email}
                name='email'
                onChange={handleChange}
            />
            </label>
            <label>Role
            <input
                type='text'
                placeholder='Enter role here'
                value={props.values.role}
                name='role'
                onChange={handleChange}
            />
            </label>
            <input type='submit' value='Add team member' />
        </form>
    )
}

export default Form;