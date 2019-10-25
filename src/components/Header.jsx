import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <h2>Bubket Lizzzzzst</h2>
                <Link to="/">My Bucket Lizzt</Link>
                <Link to="/ideas">Ideas for the Bubket lizzzzszst</Link>
            </header>
        );
    }
}

export default Header;