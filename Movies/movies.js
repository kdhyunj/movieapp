let currentId = 0;
let moviesList = [];

$(function() {
    
  $("#new-movie-form").on("submit", function(evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieData = { title, rating, currentId };
    const HTMLtoAppend = createMovieDataHTML(movieData);

    currentId++
    moviesList.push(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("#new-movie-form").trigger("reset");
  });

  $("tbody").on("click", ".btn.btn-delete", function(evt) {
 
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    
    moviesList.splice(indexToRemoveAt, 1)

    $(evt.target)
      .closest("tr")
      .remove();
    
  });
});

function createMovieDataHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-delete" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
