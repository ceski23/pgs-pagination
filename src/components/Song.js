import React from 'react';
import S from '../styles/Song.module.scss';
import PropTypes from 'prop-types';

const Song = ({ data }) => {
  const { trackName, artistName, artworkUrl100 } = data;
  
  return (
    <div className={S.song}>
      <img src={artworkUrl100} alt={trackName} className={S.cover} />
      <div className={S.info}>
        <h3 className={S.title}>{trackName}</h3>
        <p className={S.author}>By {artistName}</p>
      </div>
    </div>
  );
}

Song.propTypes = {
  data: PropTypes.object.isRequired
}

export default Song;