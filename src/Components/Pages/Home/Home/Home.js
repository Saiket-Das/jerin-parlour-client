import React from 'react';
import Banner from '../Banner/Banner';
import Overview from '../Overview/Overview';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Overview></Overview>
        </div>
    );
};

export default Home;