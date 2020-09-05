import React from 'react';
import { Route } from 'react-router-dom';
import ClothesPage from './pages/ClothesPage';

const App = () => {
  return <Route path="/:category?" component={ClothesPage} />
};

export default App;