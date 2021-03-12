import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MovieController extends Controller {
    @tracked movieCopy = this.model;
    @tracked editing = null;
    @tracked addingReview = null;
    @tracked newReview = '';
    @tracked newReviewer = '';

    @action editMovie() {
        this.editing = true;
    }

    @action saveMovie() {
        // Not currently working
        this.movieCopy.save();
        this.editing = false;
    }

    @action cancel() {
        this.editing = false;
    }

    @action addReview() {
        this.addingReview = true;
        this.newReview = '';
        this.newReviewer = '';
    }

    @action cancelAddReview() {
        this.addingReview = false;
    }

    @action saveReview() {
        this.model.reviews.addObject({
            review: this.newReview,
            reviewer: this.newReviewer,
        })

        this.addingReview = false;
    }
}
