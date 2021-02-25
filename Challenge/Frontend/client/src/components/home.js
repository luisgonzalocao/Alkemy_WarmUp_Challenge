import React from 'react';
import Header from './header';
import Posts from './posts';
import './css/home.css'

const Home = (req, res) => {

    return(
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="col">
                    <div className="row">
                        <Posts/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;