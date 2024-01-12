import React, { FC, useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchById } from '../../store/slice/datailSlice';
import { IListInr } from '../../store/modules';
import Spiner from '../Spiner/Spiner';

const Datail: FC = () => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const [query] = useState(searchParams.get('c'))


    useEffect(() => {
        query && dispatch(fetchById(query))
    }, [dispatch, query])
    const { detail, error, loading } = useAppSelector(state => state.datails)
    const listIngr: IListInr = () => {
        const arr = []
        for (let key in detail) {
            if (key.includes('strIngredient') && detail[key] !== null) {
                arr.push(detail[key])
            }
        }
        return arr
    }
    if (loading) {
        return <Spiner />
    }
    return (
        <div className='cocktail_datail'>
            {
                error ?
                    <span className='error animate__animated animate__flash'> {error} </span> :
                    <div className='datail'>
                        <img src={detail?.strDrinkThumb} alt={detail?.strDrink} />
                        <h2 className='name_cocktail'>{detail?.strDrink}</h2>
                        <h3>{detail?.strAlcoholic}</h3>
                        <h4>{detail?.strCategory}</h4>
                        <h5>{detail?.strGlass}</h5>
                        <ol className='list_ingr'>
                            {
                                listIngr().length > 0 &&
                                listIngr().map((el, i) => (
                                    <NavLink key={i} to={`/ingredient/${el}`}><li className='list' key={i}>{el}</li></NavLink>
                                ))
                            }
                        </ol>
                    </div>
            }
        </div>
    );
};

export default Datail;