import React, { useState } from 'react';
import TopNav from './TopNav';
import StickyNav from './StickyNav';

const Header = () => {
    const [hide, setHide] = useState("hidden");
    return (
        <div>
            <TopNav setHide={setHide} hide={hide} />
            <StickyNav hide={hide} />
        </div>
    );
};

export default Header;