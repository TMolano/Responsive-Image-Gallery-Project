const key = 'a76888a1a0e311b48583aeb7d4071f02209f8096af0b11a40bb385c07a2915b9';
const api_endpoint = 'https://api.unsplash.com/photos/';

//Fetch API data

const url = api_endpoint+'?client_id='+key;

fetch(url)

    .then(results => results.json())

    .then(resultsJSON => {
        //Insert API data
        let newContent = '';

        for(let i = 0; i < resultsJSON.length; i++)
        {
            newContent += '<li class="photos"><article>'+ '<img  src="' + resultsJSON[i].urls.small + '" ' +
                'srcset="' + resultsJSON[i].urls.small + ' 400w, https://www.tcgplayer.com/Content/images/tcgplayer-logo-color_320x120.png 800w" ' +
                'sizes="(max-width:300px) 100vw, (max-width:1000px) 10vw"/>';
            newContent += '<div id="hover"><p id="user">' + resultsJSON[i].user.name + '</p>';
            newContent += '<p id="likes">' + resultsJSON[i].likes + '</p></div></article></li>';
        }
        let apiResults = document.querySelector('ul#photoGallery');
        apiResults.innerHTML = newContent;
        console.log(resultsJSON);

    })

    .catch( error => {
        console.log('An Error Occurred:', error)
    });


const globe = document.getElementById("logo");

globe.addEventListener("click", function () {

    if(globe.className === "spin"){
        globe.classList.remove("spin");
    }
    else
        globe.classList.add("spin");

});