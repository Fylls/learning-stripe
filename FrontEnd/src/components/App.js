import React from "react"
// Components
import HomePage from "./HomePage"
// Stripe
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
// Styles
import "../index.scss"

const stripePromise = loadStripe(
  "pk_test_51Gs0xOBhiUsS8BKcBBqQlYVYsR3wc7y6Levt6aazlyuMkzkqh5tLhNud4nS1wJEjJUawbfvDSYndtrQWTfnd3W5q00qB2Fhv41"
)

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  )
}

export default App
