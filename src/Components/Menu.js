import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../Context'

function Menu() {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{user}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to={'/home'}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            </Link>
                            <Link to={'/Features'}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            </Link>
                            <Link to={'/price'}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            </Link>
                            <Link to={'/form'}>
                            <li className="nav-item">
                                <a className="nav-link">Form</a>
                            </li>
                            </Link>
                            <Link to={'/student'}>
                            <li className="nav-item">
                                <a className="nav-link">Student</a>
                            </li>
                            </Link>
                            <Link to={'/calculator'}>
                            <li className="nav-item">
                                <a className="nav-link">Calculator</a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu