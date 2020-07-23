import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name,checked)
    }

    const onInputChange = evt => {
        const { name, value} = evt.target
        inputChange(name, value)
    }

    return (
        <form className='formContainer' onSubmit={onSubmit}>
                <div className = 'errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.name}</div>
                    <div>{errors.status}</div>
                    <div>{errors.terms}</div>
        </div>
            <div className='formInputs'>
                <h4>General Information</h4>
                <label>Username:
                    <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                    placeholder='Please enter a valid username'
                    maxLength='20'
                    />
                </label>
                <label>Email:
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                    placeholder='Please enter a valid username'
                    maxLength='30'
                    />
                </label>
                <label>Password:
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                    placeholder='Please enter a valid password'
                    maxLength='20'
                    />
                </label>
                <label>Display Name:
                    <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    placeholder='What would you like us to call you?'
                    maxLength='20'
                    />
                </label>
                <h4>Are you a student?</h4>
                <label>Yes
                    <input
                    value='yes'
                    onChange={onInputChange}
                    name='status'
                    type='radio'
                    checked={values.status === 'yes'}
                    />
                </label>
                <label>No
                    <input
                    value='no'
                    onChange={onInputChange}
                    name='status'
                    type='radio'
                    checked={values.status === 'no'}
                    />
                </label>
            </div>
            <div className="checkboxes">
                <h4>Do you accept the Terms of Use?</h4>
                <label>Yes, I accept
                    <input
                    type='checkbox'
                    name='terms'
                    checked={values.terms === true}
                    onChange={onCheckboxChange}
                    />
                </label>
                <button disabled={disabled}>Register</button>
            </div>
        </form>
    )
}