import React from 'react';
import Header from './header';
import ShowPosts from './showPosts';
import './css/home.css'

const Home = (req, res) => {

    return(
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="col">
                    <div className="row">
                        <ShowPosts/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;