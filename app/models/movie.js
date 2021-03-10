import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
    @attr title;
    @attr posterUrl;
    @attr director;
    @attr description;
    @attr rottenTomatoes;
    @attr releaseDate;
    @attr genre;
}
