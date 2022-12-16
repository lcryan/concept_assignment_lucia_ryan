import React, {useEffect, useState} from 'react';
import Logo from "../../assets/logo.png";
import axios from "axios";


function Home() {
    const [oneReddit, setOneReddit] = useState([]);
    useEffect(() => {
        async function getOneReddit() {

            try {

                const response = await axios.get("https://www.reddit.com/hot.json?limit=15")
                /*console.log(response.data.data.children[0])*/
                /*setOneReddit(response)*/
                setOneReddit(response.data.data.children) /*this is only for the 15 posts ! */
            } catch (e) {
                console.log(e)
            }
        }

        getOneReddit()


    }, [])


    return (
        <>
            <header className="outer-container">
                <div className="inner-container">
                    <img src={Logo} id="logo-image" alt='reddit-logo'/>
                    <h1>Reddit</h1>
                </div>
            </header>

            <main className="outer-container">
                <div className="inner-container">
                    <h2>hottest posts</h2>
                    <h4>on reddit right now</h4>
                    <section className="reddit-posts">
                        <article className="reddit-posts">
                            <div className="reddit-post-list">
                                {oneReddit.map((reddit) => {
                                    return (
                                        <article key={reddit.data.id}>
                                            <h3>{reddit.data.title}</h3>
                                            <p>{reddit.data.subreddit_name_prefixed}</p>
                                            <p>Comments {reddit.data.num_comments}</p>
                                            <p>Ups {reddit.data.ups}</p>
                                        </article>
                                    )
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home;


