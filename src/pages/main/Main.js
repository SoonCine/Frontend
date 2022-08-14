import React from 'react';
import { useState } from 'react';
import MainHeader from './MainHeader';
import MainList from './MainList';

const Main = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 0,
      movieTitle: '올드보이',
      movieDate: '22/8/14',
      movieImage:
        'https://breed-assets.wisdompanel.com/dog/poodle-miniature-toy/poodle-miniature-toy1.jpg',
      likeCount: '2',
    },
  ]);
  return (
    <div>
      <MainHeader />
      <div>
        {movieList.map((item, index) => {
          return (
            <MainList
              key={item.id}
              movieList={movieList}
              setMovieList={setMovieList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
