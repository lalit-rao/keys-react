import { useRef } from "react";
import {  FaUserCircle } from "react-icons/fa";
import { BsFillChatLeftTextFill,BsThreeDots } from "react-icons/bs";
import { AiOutlineInfoCircle} from "react-icons/ai";
import "../components/Navbar.css";
import { logo } from "../assets/images/index.js";


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };





    return (


        <header>

                <h1>KEYS</h1>

                <nav ref={navRef}>
                <a className="button-icon" href="/#">
                        <BsFillChatLeftTextFill />
                </a>
                <a className="button-icon" href="/#">
                    <AiOutlineInfoCircle />
                </a>
                <a className="button-icon" href="/#">
                    <FaUserCircle />
                </a>
                <a className="button-icon" href="/#">
                    <BsThreeDots />
                </a>
                {/*<button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>*/}
            </nav>
            {/*<button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>*/}
        </header>



    );

}

export default Navbar;