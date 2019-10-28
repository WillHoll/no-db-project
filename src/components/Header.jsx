import React from 'react';
import { Link } from 'react-router-dom';
import '../reset.css';
import './Header.css'


export default function Header() {
    return (
        <header>
            <h1>Bubket Lizzzzzst</h1>
            <nav>
                <Link to="/">
                    <button className='my-list'>My Bucket Lizzt</button>
                </Link>
                <Link to="/ideas">
                    <button className='idea-lister'>Ideas for the Bubket lizzzzszst</button>
                </Link>
                <Link to="/poster">
                    <button className='adding-lister'>Make your own Acniviny</button>
                </Link>
            </nav>
        </header>
    );
}

