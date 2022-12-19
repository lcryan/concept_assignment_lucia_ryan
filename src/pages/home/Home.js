import React, {useEffect, useState} from 'react';
import Logo from "../../assets/logo.png";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import './Home.css'


function Home() {
    const [oneReddit, setOneReddit] = useState([]);
    useEffect(() => {
        async function getOneReddit() {

            try {
                const response = await axios.get("https://www.reddit.com/hot.json?limit=15")
                setOneReddit(response.data.data.children) /*this is only for the 15 posts ! */
            } catch (e) {
                console.log(e)
            }
        }

        getOneReddit()


    }, [])


    return (
        <>
            <Header
                nameOfListItem1="hottest posts"
                nameOfListItem2="reddit"
                nameOfListItem3="memes"
                image={Logo}
                pageTitle="Reddit"
            />

            <div className="outer-container">
                <h2>Hottest posts</h2>
                <h4>on Reddit right now</h4>
            </div>
            <div className="inner-container-posts">
                    <article className="reddit-post">
                        <div className="reddit-post-list">
                            {oneReddit.map((reddit) => {
                                return (
                                    <article key={reddit.data.id}>
                                        <h3>{reddit.data.title}</h3>
                                        <div className="post-traffic-details">
                                            <h4><Link
                                                to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit}</Link>
                                            </h4>
                                            <p>{reddit.data.subreddit_name_prefixed}</p>
                                            <p>Comments {reddit.data.num_comments}</p>
                                            <p>Ups {reddit.data.ups}</p>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </article>

            </div>
        </>
    )
}

export default Home;


