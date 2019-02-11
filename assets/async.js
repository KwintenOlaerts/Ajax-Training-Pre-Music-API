 $(document).keydown(function (e) {
    if (e.keyCode === 13) {
      movTitle = $('#movTitle').val();
      $.get("http://www.omdbapi.com/?s=" + movTitle + "&apikey=844ab8f4", function(data) {
        $('#titels').empty();

        data.Search.forEach(film => {
          $('#titels').append('<li id="'+film.Title+'">' + film.Title + " " + film.Year + '</li>')

        })
      })
      }
        $("#titels").on( "click", "li", function() {
          let thisMovie = $(this).attr("id")
          $.get("http://www.omdbapi.com/?t=" + thisMovie + "&apikey=5b5839a9", function(data2) {

          $('#titels').text();
          console.log(data2.Plot);


          })

});
});