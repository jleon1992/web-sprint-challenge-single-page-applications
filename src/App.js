import React, {useState} from "react";
import PizzaForm from './PizzaForm'
import PizzaList from './PizzaList'
import { Route, Link } from 'react-router-dom'


const initialValues = {
  name: '',
  size: '',
  toppings: '',
  specialInstructions: '',
  // Toppings
  toppings: {
    pepperoni: false,
    xtracheese: false,
    mushrooms: false,
    buffalochicken: false
  }
}

const initialErrors = {
  name: '',
  size: '',
}

const initialOrders = []


const App = () => {

  const[formValues, setFormValues] = useState(initialValues)
  const[orders, setOrders] = useState(initialOrders)
  const[errors, setErrors] = useState(initialErrors)

  const submitOrder = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
      .filter(toppingName => (formValues.toppings[toppingName] === true))
    }
    setOrders(newOrder)
  }

  const onChange = evt => {
    const { name, value } = evt.target

    // // 🔥 STEP 11- RUN VALIDATION WITH YUP
    // Yup
    //   .reach(formSchema, name)
    //   //we can then run validate using the value
    //   .validate(value)
    //   // if the validation is successful, we can clear the error message
    //   .then(() => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: ""
    //     })
    //   })
    //   /* if the validation is unsuccessful, we can set the error message to the message 
    //     returned from yup (that we created in our schema) */
    //   .catch(err => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0] // investigate
    //     })
    //   })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const onCheckBoxChange = evt => {

    const {name, checked} = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }


  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to={'/pizza'}>
        <button>Place Order</button>
      </Link>
      <div>
        <Route exact path="/">
          <div>
          
          {
            orders.map(order  => {
              return <PizzaList orders={order} />
            })
          }
          </div>
          
          
        </Route>
        <Route path='/pizza'>
          <PizzaForm values={formValues} onChange={onChange} onSubmit={submitOrder} errors={errors} onCheckBoxChange={onCheckBoxChange} />
        </Route>
      </div>
    </div>
  );
};
export default App;
