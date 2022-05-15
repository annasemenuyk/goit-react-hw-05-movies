import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import LoaderSpinner from './components/Loader';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const FilmPage = lazy(() =>
  import('../pages/FilmPage' /* webpackChunkName: "movies-page" */)
);
const FilmDetailsCard = lazy(() =>
  import('../pages/FilmDetailsCard' /* webpackChunkName: "movie-details" */)
);

const App = () => {
  return (
    <Container>
      <Header />

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <FilmPage />
          </Route>

          <Route path="/movies/:movieId">
            <FilmDetailsCard />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
