const dropDown = document.querySelector('#breed-dropdown');

async function getAllBreeds() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const responseJSON = await response.json();
        let keys = Object.keys(responseJSON.message)
        for (const val of keys) {
            let option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            dropDown.appendChild(option);
        }
    } catch (error) {
        console.log(error.message);
    }
}

getAllBreeds()

let btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
    try {
        let requestedBreed = dropDown.value;
        const url = 'https://dog.ceo/api/breed/' + requestedBreed + '/images/random';
        const response = await fetch(url);
        const responseJSON = await response.json();
        document.getElementById('image').src = responseJSON.message;
    } catch (error) {
        console.log(error);
    }

}) 