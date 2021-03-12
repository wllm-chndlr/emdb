import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MovieController extends Controller {
    @tracked movieCopy = this.model;
    @tracked editing = null;

    @action editMovie() {
        this.editing = true;
    }

    @action saveMovie() {
        this.movieCopy.save();

        this.editing = false;
    }

    @action cancel() {
        this.editing = false;
    }
}
