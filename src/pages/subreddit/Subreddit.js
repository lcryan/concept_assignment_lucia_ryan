import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './Subreddit.css'
import Header from "../../components/Header";

function SubredditPage() {


    const [redditDetails, setRedditDetails] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function getDetails() {

            try {

                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`)
                console.log(response.data.data)
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

<h1>r/{id}</h1>

            <h4>Subreddit Specifications</h4>
            <main className="subreddit-specs-page">
                <section className="outer-container-specs">
                    <div className="inner-container-specs">
                        {Object.keys(redditDetails).length > 0 && (
                            <div className="all-details-per-reddit">
                                <h2> Title : {redditDetails.title}</h2>
                                <p>Description: {redditDetails.public_description}</p>

                                <p> Subscribers : {redditDetails.subscribers}</p>
                            </div>
                        )}
                    </div>

                </section>
            </main>
        </>
    );
}

export default SubredditPage;
