import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchByIngredient } from '../../store/slice/datailSlice';
import Spiner from '../Spiner/Spiner';

const Ingredient: FC = () => {
    const { name } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        name && dispatch(fetchByIngredient(name))
    }, [name, dispatch])
    const { error, ingredient, loading } = useAppSelector(state => state.datails)
    if (loading) {
        return <Spiner />
    }

    return (
        <div >
            {
                error ?
                    <span className='error animate__animated animate__flash'> {error} </span> :
                    <div className='ingredient'>
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`} alt={name} />
                        <div className="description">
                            <h3>{ingredient?.strIngredient}</h3>
                            <p>{ingredient?.strDescription ? ingredient.strDescription : 'Описании нет'}</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Ingredient;