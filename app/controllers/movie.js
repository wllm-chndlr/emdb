import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MovieController extends Controller {
    @tracked editing = null;
    @tracked addingReview = null;
    @tracked newReview = '';
    @tracked newReviewer = '';

    @action addReview() {
        this.addingReview = true;
        this.newReview = '';
        this.newReviewer = '';
    }

    @action cancel() {
        this.editing = false;
    }

    @action cancelAddReview() {
        this.addingReview = false;
    }

    // Not currently working
    @action editMovie() {
        this.editing = true;
    }

    // Not currently working
    @action saveMovie() {
        this.editing = false;
    }

    @action saveReview() {
        this.model.reviews.addObject({
            review: this.newReview,
            reviewer: this.newReviewer,
        })

        this.addingReview = false;
    }
}
