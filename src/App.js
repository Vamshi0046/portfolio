import React from 'react'
import { Header, About, Work, Skills, Contact,Services} from "./containers";
import "./App.scss";
import { Navbar,Footer,FloatingHireMe, AiAssistant ,TopBanner} from "./components";

const App = () => (
  <div>
    <TopBanner />
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Services />
    <Contact />
    <Footer />
    <AiAssistant/>
    <FloatingHireMe />
  </div>
)

export default App;