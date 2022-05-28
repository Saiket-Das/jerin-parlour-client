import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Overview from '../Overview/Overview';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Overview></Overview>
            <Footer></Footer>
        </div>
    );
};

export default Home;