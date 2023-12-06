import React, { useEffect, useState } from 'react';
import Header from '../CommonComponets/Footer/Header/Header';
import { Outlet } from 'react-router-dom';
import SideNav from '../Pages/Home/SideNav/SideNav';

const CompontsLayout = () => {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='bg-gray-900'>
            <div className={!scrolling ? 'sticky top-0 ' : 'sticky top-0 z-50'}><Header /></div>
            <div className='flex px-4 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <SideNav />
                {/* <Outlet /> */}
            </div>
        </div>
    );
};

export default CompontsLayout;