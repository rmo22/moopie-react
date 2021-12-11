import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <nav className="logoclass navbar navbar-expand-lg navbar-light">
                            <a className='hyperlinkStyle' href='www.facebook.com'>
                                <img className='logoStyle' src='work.jpg' alt='logo'></img>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar
