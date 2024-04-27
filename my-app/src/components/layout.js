import React from 'react';
import Particles from './particles'; // Ensure your particle component is imported correctly

function Layout({ children }) {
    return (
        <div>
            <Particles />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;
