import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table(props) {
    return (
        <div className="table">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}