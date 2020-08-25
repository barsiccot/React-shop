import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../actions/movie';
import App from '../components/App';
import orderBy from 'lodash/orderBy';



const sortBy = (movies, filterBy) => {

  switch (filterBy) {
    case 'price_high':
      return orderBy(movies, 'price', 'desc');
    case 'price_low':
      return orderBy(movies, 'price', 'asc');
    case 'author':
      return orderBy(movies, 'author', 'asc');
    default:
      return movies;

  }

};



const filterMovies = (movies, searchQuery) =>
movies.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,

  );

const searchMovies = (movies, filterBy, searchQuery) => {
  return sortBy(filterMovies(movies, searchQuery), filterBy);
};

const mapStateToProps = ({ movies, filter }) => ({
    movies: movies.items && searchMovies(movies.items, filter.filterBy, filter.searchQuery),
  isReady: movies.isReady,

});



const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(moviesActions, dispatch),

});



export default connect(

  mapStateToProps,

  mapDispatchToProps,

)(App);