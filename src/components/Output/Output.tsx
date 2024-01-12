import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Cocktail from '../Cocktail/Cocktail';

const Output: FC = () => {
    const { error, list, loading } = useAppSelector(state => state.cocktails)
    return (
        <div className='output'>
            <div className="neon_bars">
                <h2 className="bar_new">МЕНЮ БАРА</h2>
                <h2 className="new_bar">МЕНЮ БАРА</h2>
                <h2 className="violet_bar">МЕНЮ БАРА</h2>
                <h2 className="bar_violet">МЕНЮ БАРА</h2>
            </div>
            <div className='cocktails_wripper container'>
                {
                    loading ? <h1>Loading...</h1> : error ?
                        <span className='error animate__animated animate__flash'> {error} </span> :
                        list.length > 0 &&
                        list.map(el => <Cocktail key={el.idDrink} {...el} />)
                }
            </div>
        </div>
    );
};

export default Output;