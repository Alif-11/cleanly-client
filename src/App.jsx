import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <div id="persistent-navbar-top">Wh</div>
      <div id="persistent-navbar-bottom">Wh</div>
      <div>Hello! Welcome to the cleanly frontend!</div>
      <button onClick={async () => {
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
    </>
  )
  /*
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
