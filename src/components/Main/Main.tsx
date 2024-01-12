import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Datail from '../../pages/Datail/Datail';
import Ingredient from '../../pages/Ingredient/Ingredient';
import Home from '../../pages/Home/Home';
import Menu from '../../pages/Menu/Menu';
import NotFount from '../../pages/NotFount/NotFount';

const Main: FC = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/detail-cocktail/:name' element={<Datail />} />
                <Route path='/ingredient/:name' element={<Ingredient />} />
                <Route path='/*' element={<NotFount />} />
            </Routes>
        </main>
    );
};

export default Main;