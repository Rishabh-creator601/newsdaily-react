import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Daily </a>
                        <a class="navbar-brand" href="#">
    <img src={require("../logo.jpg")} width="30" height="30" alt="" />
                         </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/health">Home</Link>
                                </li>

                                
                                <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/about">About US</NavLink></li>
                          
          
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
