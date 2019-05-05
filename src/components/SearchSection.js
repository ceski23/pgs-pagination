import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/SearchSection.module.scss';


const SearchSection = ({ filter, setFilter, reSearch }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    reSearch();
  };

  const onChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section className={S.search}>
      <h2 className={S.title}>iTunes api example</h2>
      <form className={S.searchBox} onSubmit={onSubmit}>
        <input type="text" className={S.input} value={filter} onChange={onChange} placeholder="Search songs..." />
        <input type="submit" className={S.submit} value="search" />
      </form>
      <p className={S.text}>
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
