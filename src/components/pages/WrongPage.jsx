import React from 'react'
import { Link } from "react-router-dom";


export default function WrongPage() {
    return (
      <section className="wrong">
        <h2>Oops! Wrong Page!</h2>
        <Link to="/">Back to Home</Link>
        <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
      </section>
    );
}
