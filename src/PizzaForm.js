import React from 'react'

export const PizzaForm = (props) => {
    const{
        values,
        submitOrder,
        onChange,
        errors
    } = props
    return (
        <div>
            <form onSubmit={submitOrder}>
                <label>
                    Name:
                    <input 
                    type='text'
                    value={props.value}
                    onChange={onChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default PizzaForm
