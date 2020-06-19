import React from 'react'
import {Link} from 'react-router-dom'
export const PizzaForm = (props) => {
    const{
        values,
        submitOrder,
        onChange,
        errors,
        onCheckBoxChange
    } = props
    return (
        <div>
            <form onSubmit={submitOrder}>
                <label>
                    Name:
                    <input 
                    type='text'
                    value={props.name}
                    onChange={onChange}
                    />
                </label>
                <div>
                    {errors.name}
                </div>
                <label>
                    Size:
                    <select 
                    type='text'
                    value={props.size}
                    onChange={onChange}
                    >
                        <option value=''>---Select---</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <div className="toppings">
                    <h4>Toppings</h4>

                    <label>Pepperoni
                        <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.pepperoni} 
                        />
                    </label>


                    <label>Extra Cheese
                        <input
                        type='checkbox'
                        name='xtracheese'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.xtracheese} 
                        />
                    </label>

                    <label>Mushrooms
                        <input
                        type='checkbox'
                        name='mushrooms'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.mushrooms} 
                        />
                    </label>

                    <label>Buffalo Chicken
                        <input
                        type='checkbox'
                        name='buffalochicken'
                        onChange={onCheckBoxChange}
                        checked={values.toppings.buffalochicken} 
                        />
                    </label>
                </div>
                <Link to={'/'}>
                     <button>Confirm Order</button>
                </Link>
                
            </form>
        </div>
    )
}

export default PizzaForm
