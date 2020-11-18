import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);
  const inputRef = useRef('');

  useEffect(() => {
    if (search) {
      inputRef.current.focus();
    }
  }, [search]);

  if (!search) {
    return (
      <Container>
        <City onClick={() => setSearch(true)}>{city}</City>
        <h2>{country}</h2>
      </Container>
    );
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeather(query);
        }}
      >
        <input
          required
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Change</button>
        <button onClick={() => setSearch(false)}>Cancel</button>
      </form>
    </Container>
  );
};

export default Location;

const Container = styled.header`
  text-align: center;
  h2 {
    opacity: 0.75;
    text-transform: uppercase;
  }
`;
const City = styled.h1`
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: capitalize;
  box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.4),
    0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #111;
  &:hover {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4);
  }
`;
