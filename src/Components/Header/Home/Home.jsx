import React from 'react';
import "../Home/home.css"

const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <div className="home__container">
                <div className="left__part__home">
                    Left
                    </div>
                <div className="central__part__home">
                    Central
                    </div>
                <div className="right__part__home">
                    Right
                    </div>
            </div>
        </div>
    );
};

export  {Home};