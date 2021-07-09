import React from "react"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"

import { BouncyBalls } from "../components/bouncyBalls"

init("user_2FSLTkKp2FSGRLQxV9IJl")

// import "./ContactUs.css"

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_c7sk9nr",
        // "template_z8g8d9p",
        "template_dv5q833",
        e.target,
        "user_2FSLTkKp2FSGRLQxV9IJl"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
      <div className="contact-me-container">
        <form className="contact-form" onSubmit={sendEmail}>
          <div>Please contact me with any questions or comments.</div>
          <div className="line"></div>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="button" type="submit" value="Send" />
        </form>
        <div className="bouncyBalls">
          <BouncyBalls />
        </div>
      </div>
  )
}
