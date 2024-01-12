import React, { FC, FormEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import Cocktail from '../../components/Cocktail/Cocktail';
import { fetchByAllCocktails, fetchByFilterCocktails, fetchByNameCocktails, fetchForGlasses } from '../../store/slice/cocktailSlice';

const Menu: FC = () => {
    const { error, list, loading } = useAppSelector(state => state.cocktails)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')

    const hendleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (value.trim().length) {
            dispatch(fetchByNameCocktails(value))
        }
        setValue('')
    }

    const hendleFilter = (filter: string) => {
        if (filter === 'All') {
            dispatch(fetchByAllCocktails())
        } else {
            dispatch(fetchByFilterCocktails(filter))
        }
    }
    const hendleForGlass = (glass: string) => {
        dispatch(fetchForGlasses(glass))
    }

    const { glass } = useAppSelector(state => state.cocktails)
    return (
        <div className='container' >
            <div className="top_menu">
                <select className='select' onChange={(e) => hendleFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non_Alcoholic</option>
                </select>
                <form className='search_form' onSubmit={hendleSearch}>
                    <input className='inp' value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='Cocktail Name' />
                    <button className='ui-btn'><span>Search</span></button>
                </form>
                <select className='select' onChange={(e) => hendleForGlass(e.target.value)}>
                    {
                        glass.length > 0 &&
                        glass.map((el, i) => (
                            <option key={i} value={el.strGlass}>{el.strGlass}</option>
                        ))
                    }
                </select>
            </div>
            <div className='menu_bar '>
                {
                    loading ? <h1>Loading...</h1> : error ?
                        <span className='error animate__animated animate__flash'> {error} </span> :
                        list === null ? <h3>Не пралильный запрос</h3> :
                            list.length > 0 &&
                            list.map(el => <Cocktail key={el.idDrink} {...el} />)
                }
            </div>
        </div >
    );
};

export default Menu;