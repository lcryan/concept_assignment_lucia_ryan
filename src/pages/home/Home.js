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
                <h4 className="subtitle">on Reddit right now</h4>
            </div>
            <div className="inner-container-posts">

                <div className="reddit-post-list">
                    {oneReddit.map((reddit) => {
                        return (
                            <article className="reddit-post" key={reddit.data.id}>
                                <a href={reddit.data.url} className="link-to-subreddit-post">
                                    <h4 className="reddit-post-title">{reddit.data.title}</h4>
                                </a>
                                <div className="post-traffic-details">
                                    <h4 className="link-to-post"><Link
                                        to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit}</Link>
                                    </h4>
                                    <p>Comments {reddit.data.num_comments}</p>
                                    <p> - Ups {reddit.data.ups}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>

            </div>

            <footer className="page-footer">
                <p>In opdracht van NOVI Hogeschool © 2022</p>
            </footer>
        </>
    )
}

export default Home;


