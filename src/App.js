import React from "react";
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {

  return (

    <div>

      <Nav></Nav>

      <main>

        <About></About>
        <Footer></Footer>
      </main>

    </div>

  );

}

export default App;
