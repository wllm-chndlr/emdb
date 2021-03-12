import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
    @attr description;
    @attr director;
    @attr genre;
    @attr posterUrl;
    @attr releaseDate;
    @attr reviews;
    @attr rottenTomatoes;
    @attr title;
}
