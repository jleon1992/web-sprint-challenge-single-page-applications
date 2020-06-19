import React, {useState} from "react";
import PizzaForm from './PizzaForm'
import PizzaList from './PizzaList'
import { Route, Link } from 'react-router-dom'


const initialValues = {
  name: '',
  size: '',
  toppings: '',
  specialInstructions: ''
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

  const submitOrder = () => {

  }

  const onChange = () => {

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
          <PizzaList orders={orders} />
        </Route>
        <Route path='/pizza'>
          <PizzaForm values={formValues} onChange={onChange} onSubmit={submitOrder} errors={errors} />
        </Route>
      </div>
    </div>
  );
};
export default App;
