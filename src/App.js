import React from 'react'
import { Header, About, Work, Skills, Contact} from "./containers";
import "./App.scss";
import { Navbar,Footer } from "./components";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Contact />
    <Footer />
  </div>
)

export default App;