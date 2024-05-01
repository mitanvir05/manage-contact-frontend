import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div className='w-[1280px] h-[76px]'>
            <Navbar></Navbar>
            <ContactUs/>
        </div>
    );
};

export default Home;