import React from 'react';
import BestMoviesHeading from './bestMoviesHeading';
import MovieNumber from './movieNumber';
import PosterRaya from './poster';
import TitleRusRaya from './titleRus';
import TitleEngRaya from './titleEng';
import GenresRaya from './genres';
import DescriptionRaya from './descripton';
import DownloadButton from './downloadButton';
import WatchlistButtonActive from './watchlistButtonActive';
import RaitingButton from './raitingButton';
import Raiting from './raiting';
import Rule from './rule';

const Watchlist = () => {
    return (
        <div>
          <div>
            <h3 className = "watchlistHeading">Хочу посмотреть</h3>
            <section>
              <MovieNumber/>
              <PosterRaya/>
              <div>
                <TitleRusRaya/>
                <TitleEngRaya/>
                <GenresRaya/>
                <DescriptionRaya/>
              </div> 
              <WatchlistButtonActive/>
              <RaitingButton/>
              <Raiting/>
            </section>
          </div>
          <DownloadButton/>
          <Rule/>
          <section>
              <MovieNumber/>
              <PosterRaya/>
              <div>
                <TitleRusRaya/>
                <TitleEngRaya/>
                <GenresRaya/>
                <DescriptionRaya/>
              </div> 
              <WatchlistButtonActive/>
              <RaitingButton/>
              <Raiting/>
            </section>
            <DownloadButton/>
        </div>
    )
  };
  
  export default Watchlist;