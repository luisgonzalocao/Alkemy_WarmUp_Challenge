import React from 'react';
import Header from './header';
import Footer from './footer';
import Posts from './posts';
import './css/home.css'

const Home = (req, res) => {

    return(
        <>
            <Header/>
            <div className="container-fluid">
                <div className="col">
                    <div className="row">
                        <Posts/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default Home;