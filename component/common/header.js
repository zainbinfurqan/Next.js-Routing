import React, { Component } from 'react';
import Link from 'next/link'

class Header extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link href='/'>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link href='/discussion'>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Discussion</a>
                                </li>
                            </Link>
                            <Link href='/partydetail'>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Parties</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
export default Header;