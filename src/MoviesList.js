import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cdc2f8b7a8fb3f39d2eb0e3f63a64063&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      })
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <MovieGrid key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;