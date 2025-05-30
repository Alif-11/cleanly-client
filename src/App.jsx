import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      {/* persistent-navbar-top is the white navbar at the top of the screen. */}
      <Header />
      <div className="text-blue-400">Hello! Welcome to the cleanly frontend!</div>

      {/* The space here, between the 'Hello! Welcome to...' 
        * and the '<div id="bottom-banner"...'
        * is what React will change and shift. Everything else 
        * should be relatively permanent.
        */}


      {/* This is a test method to handle making calls to your API. Postman also is helpful for API testing. */}
      <button className="text-white" onClick={async () => {
        /* originally, you had no method: "POST" here.
        that meant that your fetch call was defaulting the method to "GET".
        since the /name endpoint handles POST requests, the server was unable
        the find the /name endpoint that handled GET request, because it doesn't exist
        */

        /*
        You can explicitly set the method to GET, and obtain the same 404 error 
        as before.
        */
        const res = await fetch(`${backendURL}/name`, {
          method: "POST",
        })
        console.log("You clicked the 'test button' on the Cleanly HomePage.");
      }}>Test button!</button>
      <Footer />
    </>
  )
}

export default App
