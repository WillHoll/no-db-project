import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <h1>Bubket Lizzzzzst</h1>
            <nav>
                <Link to="/">My Bucket Lizzt</Link>
                <Link to="/ideas">Ideas for the Bubket lizzzzszst</Link>
                <Link to="/poster">Make your own Acniviny</Link>
            </nav>
        </header>
    );
}

