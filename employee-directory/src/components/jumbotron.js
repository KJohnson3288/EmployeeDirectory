
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Title() {
    return (
        <div className="title">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>
                    <p className="lead">Click the carrots to filter by heading or you can use the search box below</p>
                </div>
            </div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Title;