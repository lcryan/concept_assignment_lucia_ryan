import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import '../../../src/App'
const Subreddit = () => {


    const [redditDetails, setRedditDetails] = useState('')
    const {subredditId} = useParams()

    return (
        <>
            <main className="subreddit-page">
                <h3>This is the page for the subreddits</h3>
                <span className="reddit-content">
                    {


                    }


                </span>


            </main>
        </>
    );
}

export default Subreddit;
