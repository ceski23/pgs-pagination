/** @jsx jsx */

import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

const SearchSection = ({ filter, setFilter, reSearch }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    reSearch();
  };

  const onChange = (event) => {
    setFilter(event.target.value);
  };

  const searchSection = css`
    background: #353535;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;

  const sectionTitle = css`
    margin: 0;
    width: 70%;
  `;

  const searchForm = css`
    margin: 30px 0;
    width: 70%;
    display: flex;
    justify-content: center;

    input[type=text] {
      background: #e8e8e8;
      border-radius: 30px 0 0 30px;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      display: block;
      flex: 1;
      min-width: 0;
      max-width: 200px;
    }

    input[type=submit] {
      background: orange;
      color: #fff;
      border-radius: 0 30px 30px 0;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
    }
  `;

  const sectionText = css`
    margin: 0;
    width: 70%;
    font-size: 14px;
  `;

  return (
    <section css={searchSection}>
      <h2 css={sectionTitle}>iTunes api example</h2>
      <form css={searchForm} onSubmit={onSubmit}>
        <input type="text" value={filter} onChange={onChange} placeholder="Search songs..." />
        <input type="submit" value="search" />
      </form>
      <p css={sectionText}>
        Search by song title, author, song number, lyrics, catalog or copyright owner
      </p>
    </section>
  );
};

SearchSection.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  reSearch: PropTypes.func.isRequired,
};

export default SearchSection;
