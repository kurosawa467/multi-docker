import React from 'react';
import { Link } from 'react-router-dom';

const other_page = () => {
    return (
        <div>
            The other page
            <Link to="/">Back to Home Page</Link>
        </div>
    );
};

export default other_page;