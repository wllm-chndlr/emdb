export default function() {
    this.get('/movies', (schema, request) => {
        return schema.movies.all();
    });

    this.get('/movies/:id');

    this.patch('/movies/:id');
}
