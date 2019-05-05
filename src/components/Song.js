import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/Song.module.scss';

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
};

export const propTypes = {
  data: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  }).isRequired,
};

Song.propTypes = propTypes;

export default Song;
