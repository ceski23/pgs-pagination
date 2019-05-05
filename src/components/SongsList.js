import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/SongsList.module.scss';
import Song, { propTypes as SongPropType } from './Song';

const SongsList = ({ songs, fullCount }) => (
  <React.Fragment>
    <p className={S.songCount}>Found {fullCount} songs</p>

    <div className={S.songs}>
      {songs.map((p, i) => <Song data={p} key={i} />)}
    </div>
  </React.Fragment>
);

SongsList.propTypes = {
  songs: PropTypes.arrayOf(SongPropType).isRequired,
  fullCount: PropTypes.number.isRequired,
};

export default SongsList;
