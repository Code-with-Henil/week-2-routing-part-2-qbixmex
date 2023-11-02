import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, RecipesPage, RecipePage, NotFound, LoginPage, DashboardPage } from '../pages';
import { Navbar } from '../components';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/dashboard" element={ <DashboardPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/recipes">
          <Route index element={ <RecipesPage /> } />
          <Route path=":recipeId" element={ <RecipePage /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;