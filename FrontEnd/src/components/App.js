import React from "react";
// Components
import HomePage from "./HomePage";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// Styles
import "../index.scss";

const stripePromise = loadStripe(
  "pk_test_51GsyYaGkWeBsIHsJXzAy8TouE3Rui7TLfZZvqkQHeM6AFq192EdydcolIXLvXr9erSPyo8I5xldL9i1Vqkaq5TMM00kuMNzvFr"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}

export default App;
