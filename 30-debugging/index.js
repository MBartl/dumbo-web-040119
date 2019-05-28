document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  const nameInput = document.getElementById('name-input')

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => slapJokeOnTheDom(jokeData.joke))
  }

  function slapJokeOnTheDom(joke) {
    newJokeLi.innerHTML = `
    <span class="username">${nameInput.value} says:</span> ${joke}
    `;
    jokeList.appendChild(newJokeLi);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
      alert('No name!');
      return;
    }
    fetchJoke();
  })
})
