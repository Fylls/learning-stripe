import React from "react"

// Components
import HomePage from "./HomePage"

// Stripe
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// Styles
import "../index.scss"

const stripePromise = loadStripe(" *** ")

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  )
}

export default App
