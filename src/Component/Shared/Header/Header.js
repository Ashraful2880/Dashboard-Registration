import React from 'react';
import TopNav from './TopNav';
import StickyNav from './StickyNav';

const Header = () => {
    return (
        <div>
            <TopNav />
            <StickyNav />
        </div>
    );
};

export default Header;