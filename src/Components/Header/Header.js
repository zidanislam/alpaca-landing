import React from 'react';
import logo from "./../../Images/Alpaca.svg";

const Header = () => {
    return (
        <div className='flex justify-center bg-rose-100'>
            <img src={logo} className='w-64' alt="logo" />
        </div>
    );
};

export default Header;