import React, { useEffect } from 'react';
import s from './NotFount.module.css'
import { Link, useNavigate } from 'react-router-dom';


const NotFount = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 4000)
    }, [navigate])
    return (
        <div className={s.container}>
            <h1>404 Error</h1>
            <h2>Pages Not Found</h2>
            <Link to={'/'}><h3>Return to Main Page</h3></Link>
        </div>
    );
};

export default NotFount;