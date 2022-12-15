import React from 'react';
import Logo from "../../assets/logo.png";
import {useEffect, useState} from "react";
import axios from "axios";


function Home() {

    useEffect(() => {
        async function getAllReddit() {

            try {

                const response = await axios.get("https://www.reddit.com/hot.json?limit=15")
                console.log(response)
            } catch (e) {
                console.log(e);
            }


        }

        getAllReddit()

    }, []);



    return (
        <>

            <img src={Logo} id="logo-image" alt='reddit-logo'/>
            <h1>Reddit</h1>

        </>
    );
}

export default Home;


