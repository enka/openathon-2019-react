import React from 'react';
import propTypes from 'prop-types';
import { Menu } from '../../components'
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__logo">
                    <img alt="Accenture Logo"
                        src={this.props.logo}
                    />
                </div>
                <h1 className="Header__title">II OPENATHON Custom Open Cloud</h1>
                <Menu />
            </div>
        );
    }
}

Header.propTypes = {
    logo: propTypes.string
}

export default Header;

