import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
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


        getDetails()

    }, [id])


    return (


        <>

            <Header

                nameOfListItem1="hottest posts"
                nameOfListItem2="reddit"
                nameOfListItem3="memes"
                pageTitle={id}
                pageSubtitle="Subreddit Specifications"
            />

            <main className="subreddit-specs-page">
                <section className="outer-container-specs">
                    <div className="inner-container-specs">
                        {Object.keys(redditDetails).length > 0 && (
                            <div className="all-details-per-reddit">
                                <h3 className="titles"> Title: </h3>
                               <p>{redditDetails.title}</p>

                                <h3 className="titles">Description: </h3>
                                  <p>{redditDetails.public_description}</p>

                            <h3 className="titles"> Subscribers : </h3>
                                <p>{redditDetails.subscribers}</p>
                                <div className="home-link">
                                    <Link to="/"><p> Take me back home!</p></Link>
                                </div>

                            </div>
                        )}
                    </div>
                </section>

            </main>
        </>
    );
}

export default SubredditPage;
