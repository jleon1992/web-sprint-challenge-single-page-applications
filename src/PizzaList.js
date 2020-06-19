import React from 'react'

export const PizzaList = (props) => {
    const {order} = props
    return (
        <div>
            <h1>Your Orders</h1>
            <div className='orderContainer'>
                <h4>{order.name}</h4>
            </div>
        </div>
    )
}


export default PizzaList