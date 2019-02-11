import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            HomePage
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

