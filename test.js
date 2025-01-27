/*
.Create a CRD application (CRUD without update) using json-server or 
another API
.Use fetch and async/await to interact with the API
.Use a form to create/post new entities
.Build a way for users to delete entities
.Include a way to get entities from the API and display them
.You do NOT need update, but you can add it if you'd like
.Use Bootstrap and/or CSS to style your project

*/

// this page has my fetch and async/await interactions with the API
document.getElementById('fetch-movies').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3005/movies');
    const movies = await response.json();
    const container = document.getElementById('movies-container');
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<h3>${movie.title}</h3><p>Genre ID: ${movie.genreId}</p>`;
        container.appendChild(movieDiv);
    });
});


async function onCreateMovieClick() {
    const response = await fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: 'Test', genreId: 1 })
    });
    const newlyCreatedItem = await response.json();
    lastCreatedItem = newlyCreatedItem;
}


async function onUpdateMovieClick() {
    if (!lastCreatedItem) {
        console.log('No item created yet to update');
        return;
    }
    await fetch(`http://localhost:3000/movies/${lastCreatedItem.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: 'Test Updated', genreId: 2 })
    });
}


async function onDeleteMovieClick() {
    if (!lastCreatedItem) {
        console.log('No item created yet to delete');
        return;
    }
    await fetch(`http://localhost:3000/movies/${lastCreatedItem.id}`, {
        method: 'DELETE'
    });
}