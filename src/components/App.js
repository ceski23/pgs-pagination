/** @jsx jsx */

import React, { useState } from 'react';
import jsonp from 'axios-jsonp';
import useAxios from '@use-hooks/axios';
import { css, jsx } from '@emotion/core';

import logo from '../images/pgslogo.png';
import SearchSection from './SearchSection';
import SongsList from './SongsList';
import { forTabletLandscapeUp } from '../styles';

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


  const appStyle = css`
    background: #fff;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const headerStyle = css`
    background: #fff;
    height: 70px;
    width: 100%;

    ${forTabletLandscapeUp(css`
      width: 50%;
    `)}
  `;

  const logoStyle = css`
    height: 100%;
  `;

  const navigationStyle = css`
    display: flex;
    justify-content: center;
    margin: 30px 0;

    button {
      border-radius: 10px;
      background: orange;
      color: #fff;
      border: 0;
      padding: 5px 15px;
      margin: 0 5px;
    }
  `;

  const statusStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  `;

  const footerStyle = css`
    color: #fff;
    background: #353535;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;

    p {
      margin: 0;

      &:after, &:before {
        content: '';
        border-top: 1px solid white;
        width: 50px;
        display: inline-block;
        height: 5px;
        margin: 0 10px;
      }
    }
  `;

  return (
    <div css={appStyle}>
      <div css={headerStyle}>
        <img src={logo} alt="PGS Software logo" css={logoStyle} />
      </div>

      <SearchSection setFilter={setFilter} filter={filter} reSearch={reFetch} />

      {songs.length > 0 && !loading ? (
        <React.Fragment>
          <SongsList songs={songs.slice(offset, offset + perPage)} fullCount={songs.length} />

          <div css={navigationStyle}>
            <button onClick={decreaseOffset} type="button">&lt;&lt; prev</button>
            <button onClick={increaseOffset} type="button">next &gt;&gt;</button>
          </div>
        </React.Fragment>
      ) : (
        <div css={statusStyle}>
          {loading ? <p>Loading data...</p> : null }
          {!loading && response ? <p>Sorry, no matches found</p> : null}
        </div>
      )}

      <div css={footerStyle}>
        <p>Powered by PGS</p>
      </div>
    </div>
  );
};

export default App;
