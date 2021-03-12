import Controller from '@ember/controller';
import { action } from '@ember/object';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class MoviesController extends Controller {
    genreOptions = A([
        {
            name: 'Filter by genre',
            value: '',
        },
        {
            name: 'Action & Adventure',
            value: 'Action & Adventure',
        },
        {
            name: 'Animation',
            value: 'Animation',
        },
        {
            name: 'Comedy',
            value: 'Comedy',
        },
        {
            name: 'Drama',
            value: 'Drama',
        },
        {
            name: 'Fantasy',
            value: 'Fantasy',
        },
        {
            name: 'Horror',
            value: 'Horror',
        },
        {
            name: 'Sci-Fi',
            value: 'Sci-Fi',
        },
    ]);

    @tracked movies = this.model;

    @action searchMovies() {
        const searchCriteria = document.querySelector('#movie-search-input').value.toLowerCase();
        let results = [];

        if (searchCriteria) {
            results = this.model.filter(movie => movie.title.toLowerCase().includes(searchCriteria));
        }

        if (results.length) {
            this.movies = results;
        } else {
            this.movies = this.model;
        }
    }

    @action selectGenre(genre) {
        debugger
        if (genre) {
            const results = this.model.filter(movie => movie.genre === genre);

            this.movies = results;

        } else {
            this.movies = this.model;
        }
    }
}
