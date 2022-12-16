import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Subreddit = () => {


    const [redditDetails, setRedditDetails] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function getDetails() {

            try {

                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`)
                setRedditDetails(response.data.data)

            } catch (e) {
                console.log(e)
            }

        }

        if (id) {
            getDetails()
        }
    }, [id])


    return (


        <>

            <header>
                <h1>r/{id}</h1>
                <h4>{}</h4>
            </header>

            <main className="subreddit-specs-page">
                <section className="outer-container-specs">
                    <div className="inner-container-specs">



                    </div>

                </section>
            </main>
        </>
    );
}

export default Subreddit;
