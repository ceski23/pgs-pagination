import React, { useState } from 'react';
import jsonp from 'axios-jsonp';
import useAxios from '@use-hooks/axios';

import S from '../styles/App.module.scss';
import logo from '../images/pgslogo.png';
import SearchSection from './SearchSection';
import SongsList from './SongsList';

const App = () => {
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState('');
  const perPage = 9;

  const { response, loading, reFetch } = useAxios({
    url: 'https://itunes.apple.com/search',
    method: 'GET',
    options: {
      adapter: jsonp,
      params: {
        term: filter,
        entity: 'song',
        limit: 200,
      },
    },
  });

  const songs = response ? response.data.results : [];

  const increaseOffset = () => {
    const n = offset + perPage;
    if (n < songs.length) setOffset(n);
  };

  const decreaseOffset = () => {
    const n = offset - perPage;
    if (n >= 0) setOffset(n);
  };

  return (
    <div className={S.app}>
      <div className={S.header}>
        <img src={logo} alt="PGS Software logo" className={S.logo} />
      </div>

      <SearchSection setFilter={setFilter} filter={filter} reSearch={reFetch} />

      {songs.length > 0 && !loading ? (
        <React.Fragment>
          <SongsList songs={songs.slice(offset, offset + perPage)} fullCount={songs.length} />

          <div className={S.navigation}>
            <button onClick={decreaseOffset} type="button">&lt;&lt; prev</button>
            <button onClick={increaseOffset} type="button">next &gt;&gt;</button>
          </div>
        </React.Fragment>
      ) : (
        <div className={S.status}>
          {loading ? <p>Loading data...</p> : null }
          {!loading && response ? <p>Sorry, no matches found</p> : null}
        </div>
      )}

      <div className={S.footer}>
        <p>Powered by PGS</p>
      </div>
    </div>
  );
};

export default App;
