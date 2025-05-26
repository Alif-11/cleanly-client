import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      {/* persistent-navbar-top is the white navbar at the top of the screen. */}
      <div id="persistent-navbar-top" className="text-blue-400 bg-white">Cleanly</div>
      {/* persistent-navbar-bottom is the blue navbar right below persistent-navbar-top. 
          It contains the buttons for PATRON and RUNNER on the left, and ABOUT US on the right. */}
      <div id="persistent-navbar-bottom" className="bg-blue-400 text-white">
        <div id="blue-navbar-left" className="hover:cursor-pointer">CLEANLY LOGO</div>
        <div id="blue-navbar-right">
          <div onClick={
            () => {
              console.log("You clicked the SIGN UP Button in the Blue Navbar");
            }
          }
            className="blue-navbar-right-subitem hover:text-blue-400 hover:bg-white hover:cursor-pointer">

            SIGN UP <div className="lets-go-arrow">&gt;</div>
          </div>
          <div className="blue-navbar-right-subitem hover:text-blue-400 hover:bg-white hover:cursor-pointer">LOG IN <div className="lets-go-arrow">&gt;</div> </div>
          <div className="blue-navbar-right-subitem hover:text-blue-400 hover:bg-white hover:cursor-pointer">ABOUT US <div className="lets-go-arrow">&gt;</div> </div>
        </div>
      </div >
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
      <div id="bottom-banner-triangle" className="bg-blue-400 text-white"></div>
      <div id="bottom-banner-rectangle" className="bg-blue-400 text-white">Cleanly & Cleanly &copy; 2025</div>
    </>
  )
}

export default App
