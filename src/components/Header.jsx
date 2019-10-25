import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <h2>Bubket Lizzzzzst</h2>
            <nav>
                <Link to="/">My Bucket Lizzt</Link>
                <Link to="/ideas">Ideas for the Bubket lizzzzszst</Link>
            </nav>
        </header>
    );
}

