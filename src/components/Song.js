/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { forTabletLandscapeUp, forDesktopUp } from '../styles';

const Song = ({ data }) => {
  const { trackName, artistName, artworkUrl100 } = data;

  const songTileMargin = '20px';

  const songStyle = css`
    display: flex;
    flex-direction: row;
    background: #efefef;
    width: calc(100% - 2*${songTileMargin});
    margin-bottom: 30px;
    padding: 20px;
    border: 2px solid transparent;
    transition: .3s;
    margin: ${songTileMargin};
    height: 130px;
    align-items: center;

    ${forTabletLandscapeUp(css`
      width: calc(50% - 2*${songTileMargin});
    `)}

    ${forDesktopUp(css`
      width: calc(33% - 2*${songTileMargin});
    `)}

    &:hover {
      border-color: orange;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }
  `;

  const coverStyle = css`
    width: 90px;
    height: 90px;
    border: 2px solid black;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    margin-right: 20px;
  `;

  const infoStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
  `;

  const infoTitleStyle = css`
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
  `;

  const infoArtistStyle = css`
    margin: 5px 0 0;
    padding-top: 5px;
    border-top: 1px solid #c3c3c3;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    text-align: center;
    font-size: 15px;
  `;

  return (
    <div css={songStyle}>
      <img src={artworkUrl100} alt={trackName} css={coverStyle} />
      <div css={infoStyle}>
        <h3 css={infoTitleStyle}>{trackName}</h3>
        <p css={infoArtistStyle}>By {artistName}</p>
      </div>
    </div>
  );
};

Song.propTypes = {
  data: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  }).isRequired,
};

export default Song;
