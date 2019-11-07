document.getElementById("search").addEventListener("click", search);

function search(e) {
  e.preventDefault();
  let s = document.getElementById("term").value;
  fetch("https://www.omdbapi.com/?s=" + s + "&apikey=47f58f6a")
    .then(res => res.json())
    .then(data => {
      console.log(data.Search);
      let op = "";
      data.Search.forEach(function(movie) {
        op += `
                    <span class="movie" id="${movie.imdbID}" onclick="details('${movie.imdbID}')">
                        <img src="${movie.Poster}">
                        <p>${movie.Title}(${movie.Year})</p>
                    </span>
                `;
      });
      document.getElementById("op").innerHTML = op;
      document.getElementById("op").style.display = "grid";
    })
    .catch(err => console.log(err));
}
//   document.getElementsByClassName('movie').addEventListener('click', details);
function details(id) {
  // let s = document.getElementById("term").value;
  fetch("https://www.omdbapi.com/?i=" + id + "&apikey=47f58f6a")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let op = "";
      op += `
                    <h1>${data.Title} (${data.Year})</h1>
                    <h3>${data.Rated}</h3>
                    <img src="${data.Poster}"><br/>
                    <a href="https://imdb.com/title/${id}">
                        <img src="https://img.icons8.com/color/48/000000/imdb.png">
                    </a><br/>
                    IMDb Score: ${data.imdbRating}
                    Metacritic: ${data.Metascore}
                    <p><b>Released:</b> ${data.Released}</p>
                    <p><b>Production Company:</b> ${data.Production}</p>
                    <p><b>Director:</b> ${data.Director}</p>
                    <p><b>Writer(s):</b> ${data.Writer}</p> 
                    <h3>Plot</h3>
                    <p>${data.Plot}</p>
                    <p><b>Runtime:</b> ${data.Runtime}</p>
                    <p><b>Genre:</b> ${data.Genre}</p>
                    <p><b>Cast:</b> ${data.Actors}</p>
                    <p><b>Languages:</b> ${data.Language}</p>
                    <p><b>Countries:</b> ${data.Country}</p>
                    <p><b>Awards:</b> ${data.Awards}</p>
                    `;
      document.getElementById("op").innerHTML = op;
      document.getElementById("op").style.display = "block";
      document.getElementById("op").style.margin = "10px";
    })
    .catch(err => console.log(err));
}
