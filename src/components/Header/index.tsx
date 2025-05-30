import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (<div id="header-wrapper">
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
  </div>)
}