import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/notfound/404.png'

const NotFound = () => {
    return (
        // not found page
        <div className="container text-center my-5">
            <img className="img-fluid" src={notfound} alt="" /><br />
            <Link to="/home"><button className="btn btn-primary mt-4">Back Home</button></Link>
        </div>
    );
};

export default NotFound;