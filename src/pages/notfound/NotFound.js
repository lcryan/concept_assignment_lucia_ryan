import React from 'react';
import Oops from "../../assets/oops_svg.jpeg"
import './NotFound.css'
import {Link} from "react-router-dom";


function NotFound() {
    return (
        <>
            <main className="page-container-not-found">
                <img src={Oops} alt="text-bubble-oops"/>
                <h1> Oops! Somehow you got lost! Please go back to <Link to="/"> -> home...</Link></h1>
            </main>
        </>
    );
}

export default NotFound;
