import React from 'react';
import S from '../styles/SongsList.module.scss';
import Song from './Song';
import PropTypes from 'prop-types';

const SongsList = ({ songs, fullCount }) => {

  return (
    <React.Fragment>
      <p className={S.songCount}>Found {fullCount} songs</p>

      <div className={S.songs}>
        {songs.map((p, i) => <Song data={p} key={i} />)}
      </div>
    </React.Fragment>
  )
}

SongsList.propTypes = {
  songs: PropTypes.array.isRequired,
  fullCount: PropTypes.number.isRequired
}

export default SongsList;