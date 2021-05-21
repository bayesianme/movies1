import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Movies from './movies';
import TVSeries from './tvSeries';
import SignIn from './signIn';
import Profile from './profile';

/*
import Logo from './components/logo';
import LogoMovies from './components/logoMovies';
import QuickSearch from './components/quickSearch';
import Navigation from './components/navigation';
import BestMoviesHeading from './components/bestMoviesHeading';
import MovieNumber from './components/movieNumber';
import PosterRaya from './components/poster';
import TitleRusRaya from './components/titleRus';
import TitleEngRaya from './components/titleEng';
import GenresRaya from './components/genres';
import DescriptionRaya from './components/descripton';
import DownloadButton from './components/downloadButton';
import WatchlistButton from './components/watchlistButton';
import RaitingButton from './components/raitingButton';
import Raiting from './components/raiting';
import ArrowButton from './components/arrowButton';
import Rule from './components/rule';
import Icons from './components/icons';
import MoviesFooter from './components/moviesFooter';
import Carousel from './components/carousel';

//movies
import SearchMovies from './components/searchMovies';
import Filter from './components/filter';
import MoviesHeading from './components/moviesHeading';
import TVSeriesHeading from './components/tvSeriesHeading';

//sign in
import Register from './components/register';
import SignInForm from './components/signInForm';
import RuleVertical from './components/ruleVertical';

//profile
import PersonalData from './components/personalData';
import Watchlist from './components/watchlist';
*/

const App = () => {
  return (
    <Router>
      <div> 
      <Switch>
        <Route path = '/' exact>
          <Home/>
        </Route>
        <Route path = '/movies'>
          <Movies/>
        </Route>
        <Route path = '/tvSeries'>
          <TVSeries/>
        </Route>
        <Route path = '/signIn'>
          <SignIn/>
        </Route>
        <Route path = '/profile'>
          <Profile/>
        </Route>
      </Switch> 
      </div>
    </Router>
  )
};



ReactDOM.render(<App/>, document.getElementById("root"));