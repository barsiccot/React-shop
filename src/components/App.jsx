import React, { Component } from 'react';
import {Container, Card} from 'semantic-ui-react';
import  axios from 'axios';
import  Menu from '../containers/Menu';
import  MovieCard from '../containers/MovieCard';
import  Filter from '../containers/Filter';

class App extends Component {
  componentWillMount(){
    const { setMovies } = this.props;
    axios.get('/movie.json').then(({ data }) => {
       setMovies(data);
    });
  }
render(){
  const { movies, isReady } = this.props;
  return(
    <Container>
      <Menu />
      <Filter />
        <Card.Group itemsPerRow ={4}>
        {!isReady
       ? 'Загрузка...'
       :movies.map((movie,i) => <MovieCard key = {i} {...movie} />)
      }
       </Card.Group>

    </Container>

  );
}
}


export default App;
