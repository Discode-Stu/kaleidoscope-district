import "./App.css"
import "./styles/main.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from "./components/homepage"
import AboutMe from "./components/aboutMe"
import Navbar from "./components/Navbar"
import ContactMe from "./components/contactMe"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/about-me" component={AboutMe} />

          <Route path="/contact-me" component={ContactMe} />

        </Switch>
      </Router>
    </div>
  )
}

export default App
