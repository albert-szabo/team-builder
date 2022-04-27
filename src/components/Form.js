import React from "react";

const Form = (props) => {
    const handleChange = event => {
        const { name, value} = event.target;
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
                placeholder='Enter your name here.'
                value={data.name}
                name='name'
                onChange={handleChange}
            />
            </label>
            <label>Email
            <input
                placeholder='Enter your email here.'
                value={data.email}
                name='email'
                onChange={handleChange}
            />
            </label>
            <label>Role
            <input
                placeholder='Enter your role here.'
                value={data.role}
                name='role'
                onChange={handleChange}
            />
            </label>
            <input type='submit' value='Make your team.' />
        </form>
    )
}

export default Form;