import React from "react"
import { NavLink } from "react-router-dom"
import { LottieFileRound } from "./lottieFiles"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <LottieFileRound />
      </div>
      <div className="navbar__right">
        <NavLink
          activeStyle={{ borderBottom: "2px solid #068064" }}
          className="navbar__right__link"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ borderBottom: "2px solid #068064" }}
          className="navbar__right__link"
          to="/about-me"
        >
          About Me
        </NavLink>
        <NavLink
          activeStyle={{ borderBottom: "2px solid #068064" }}
          className="navbar__right__link"
          to="/contact-me"
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  )
}
