const loading = document.getElementById('loading');
const jokeBtn = document.getElementById('get-joke');
const jokeDisplay = document.querySelector('.joke');

// ===================
// Event Listeners
// ===================
// DOMCONTENTLOADED
document.addEventListener('DOMContentLoaded', () => {
    getJoke();
});
jokeBtn.addEventListener('click', getJoke);

// Get joke
function getJoke() {
    const xhr = new XMLHttpRequest();
    loading.style.display = 'block';
    jokeDisplay.style.display = 'none';

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    xhr.onload = function (err) {
        if (this.status === 200) {
            setTimeout(() => {
                loading.style.display = 'none';
                jokeDisplay.style.display = 'block';
                const item = JSON.parse(this.responseText);
                const joke = item.value;
                displayJoke(joke);
            }, 2000);
        } else {
            console.log(err);
        }
    }

    xhr.send();
}

function displayJoke(joke) {
    const jokeDisplay = document.querySelector('.joke');
    let html = `
    <blockquote>"${joke}"</blockquote>
    `;
    jokeDisplay.innerHTML = html;
}
