import React from 'react';
import Florence from './Florence/Florence';
import Header from './Header/Header';
import Our from './Our/Our';
import Stay from './Stay/Stay';
import What from './What/What';
import Pricing from './Pricing/Pricing';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Florence></Florence>
            <What></What>
            <Stay></Stay>
            <Our></Our>
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;