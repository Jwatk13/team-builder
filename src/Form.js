import React from 'react';

const Form = (props) => {
    const { values } = props;

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
       <form onSubmit={handleSubmit}>
           <label>Name
            <input 
                placeholder='Enter your name...'
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
            />
            </label>
            <label>Email
                <input
                    placeholder='Enter your email...'
                    type="email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <select value={values.role} name="role" onChange={handleChange}>
                    <option value=""> -Please Select A Role- </option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Dev Ops Lead">Dev Ops Lead</option>
                </select>
            </label>
            <div>
                <button disabled={!values.name || !values.email || !values.role}> Submit </button>
            </div>
       </form> 
    )
}

export default Form;