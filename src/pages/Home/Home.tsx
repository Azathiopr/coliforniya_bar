import React, { FC, useEffect } from 'react';
import TopColifornia from '../../sections/TopColifornia/TopColifornia';
import Disco from '../../sections/Disco/Disco';
import Galary from '../../sections/Galary/Galary';
import Location from '../../sections/Location/Location';
import { fetchByAllCocktails } from '../../store/slice/cocktailSlice';
import { useAppDispatch } from '../../store/hooks/hooks';
import Output from '../../components/Output/Output';

const Home: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchByAllCocktails())
    }, [dispatch])
    return (
        <div>
            <TopColifornia />
            <Output />
            <Disco />
            <Galary />
            <Location />
        </div>
    );
};

export default Home;