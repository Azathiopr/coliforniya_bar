import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IDrink } from '../../store/modules';

const Cocktail: FC<IDrink> = ({ idDrink, strDrink, strDrinkThumb }) => {
    return (
        <Link to={`/detail-cocktail/${strDrink}?c=${idDrink} `} className='card'>
            <img src={strDrinkThumb} alt={strDrink} />
            <h4 title={strDrink}>{strDrink.length > 15 ? strDrink.slice(0, 15) + '...' : strDrink}</h4>
        </Link>
    );
};

export default Cocktail;