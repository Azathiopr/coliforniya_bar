import React, { FC } from 'react';
import logo from '../../assets/image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/hooks';
import { fetchRandom } from '../../store/slice/cocktailSlice';

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const hendleRandom = () => {
        dispatch(fetchRandom())
    }
    return (
        <header>
            <div className="header_top">
                <nav>
                    <ul className="menu container">
                        <li><NavLink to={"/menu"} className="menu_item">Меню бара</NavLink></li>
                        <li><NavLink to={"/menu"} className="menu_item">Search</NavLink></li>
                        <Link to={'/'}><img src={logo} alt="logo" /></Link>
                        <li><a href="/" className="menu_item">Контакты</a></li>
                        <li><p onClick={hendleRandom} className="menu_item"><NavLink className="menu_item" to={"/menu"}>Random</NavLink></p></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;