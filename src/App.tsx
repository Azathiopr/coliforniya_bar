import React, { FC, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useAppDispatch } from './store/hooks/hooks';
import { fetchByGlasses } from './store/slice/cocktailSlice';


const App: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchByGlasses())
  }, [dispatch])
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
