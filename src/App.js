import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Joke from "./components/Joke"
import Form from "./components/Form"
import About from "./pages/About"
import Work from "./components/Work"
// import Mrsmoolink from "./components/Mrsmoolink"


function App() {
  return (
    <div className="font-link"> 
    <Header />
    <Main />
    <h1>Hehe</h1>
    <Joke question="What did the mama cow say to the baby cow?" 
    answer="It's pasture bedtime"/>
    <Joke question="How do you count cows?" 
    answer="You use a cowculator"/>
    <Joke question="What happens when you try talking to a cow?" 
    answer="Everything just goes in one ear and out the udder"/>
    <Joke question="What kind of shows do cows like best?" 
    answer="Moosicals"/>
    <Joke question="Where do cow farts come from?" 
    answer="Their dairy-ere"/>
    <Joke answer="I am not amoosed"/>
    <Form />
    <About />
    <Work />
    <br/>
    <Footer />
    {/* <Mrsmoolink /> */}
   
    </div>
  )
}

export default App
