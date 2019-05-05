/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import Song from './Song';

const SongsList = ({ songs, fullCount }) => {
  const songCountStyle = css`
    text-align: center;
  `;

  const songsStyle = css`
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    max-width: 1000px;
    width: 100%;
    flex: 1;
  `;

  return (
    <React.Fragment>
      <p css={songCountStyle}>Found {fullCount} songs</p>

      <div css={songsStyle}>
        {songs.map((p, i) => <Song data={p} key={i} />)}
      </div>
    </React.Fragment>
  );
};

SongsList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  })).isRequired,
  fullCount: PropTypes.number.isRequired,
};

export default SongsList;
